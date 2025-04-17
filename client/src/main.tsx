import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add global styles to extend Tailwind
const style = document.createElement('style');
style.textContent = `
  @layer base {
    :root {
      --wood-dark: 16 26% 29%;
      --wood-medium: 16 22% 47%;
      --wood-light: 18 15% 69%;
      --forest-dark: 144 67% 24%;
      --forest-medium: 144 44% 34%;
      --forest-light: 122 39% 49%;
      --reddirt-dark: 14 86% 36%;
      --reddirt-medium: 14 75% 46%;
      --reddirt-light: 14 100% 56%;
      --cream: 60 33% 92%;
      --charcoal: 0 0% 20%;
    }
  }

  .font-marker {
    font-family: 'Permanent Marker', cursive;
  }

  .font-roboto-slab {
    font-family: 'Roboto Slab', serif;
  }

  .font-open-sans {
    font-family: 'Open Sans', sans-serif;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
