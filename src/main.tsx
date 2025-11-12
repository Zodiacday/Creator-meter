import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Dispatch event for prerendering to know when the app is fully rendered
if (typeof window !== 'undefined') {
  setTimeout(() => {
    document.dispatchEvent(new Event('render-event'));
  }, 100);
}
