# World's Edge Group

**"Turning data into decisions."**

World's Edge Group (WEG) is a strategic advisory firm designed for the "ambitious operator in a skeptical world." We help public sector leaders, non-profit executives, and boards move from intuition to evidence by providing rigorous economic analysis and decision briefs.

This codebase represents the firm's digital presence, focusing on a **"Corporate Editorial"** aesthetic that blends the authority of a McKinsey whitepaper with the responsiveness of a modern web application.

## 🏗 Tech Stack
*   **Framework:** React 19 + Vite
*   **Styling:** Tailwind CSS (via CDN for v0 prototyping)
*   **Typography:** Inter (Sans), Playfair Display (Serif), JetBrains Mono (Code)
*   **Icons:** Lucide React

## 🚀 Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 🎨 Design System
*   **Navy:** `#051C2C` (Primary Brand)
*   **Gold:** `#C5A065` (Accent/Selection)
*   **Slate:** `#333333` (Body Text)

## ⚠️ Known Issues (v0 Audit)
*   **Routing:** Currently uses a lightweight hash-based router (`window.location.hash`).
*   **Performance:** Tailwind is loaded via CDN script, which is not optimized for production performance.
