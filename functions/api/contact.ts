interface Env {
    RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const { request, env } = context;
        const body = await request.json() as { name?: string; email?: string; message?: string };

        // 1. Validation
        const { name, email, message } = body;
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (!env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is missing');
            return new Response(JSON.stringify({ error: 'Server configuration error' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 2. Send Email via Resend
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'WEG Contact Form <onboarding@resend.dev>', // Default Resend sender until they verify a domain
                to: 'info@worldsedgegroup.com', // Using the contact email from constants
                reply_to: email,
                subject: `New Inquiry from ${name}`,
                html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
            })
        });

        if (!resendResponse.ok) {
            const errorText = await resendResponse.text();
            console.error('Resend API Error:', errorText);
            throw new Error(`Failed to send email: ${resendResponse.statusText}`);
        }

        const data = await resendResponse.json();

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err) {
        console.error('Form submission error:', err);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
