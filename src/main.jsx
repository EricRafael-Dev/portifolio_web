import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ThemecontextProvider from "./hooks/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemecontextProvider>
      <Header />
      <App />
      <Footer />
    </ThemecontextProvider>
  </StrictMode>,
);
