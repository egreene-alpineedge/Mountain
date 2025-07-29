import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MountainPage from "./Mountain/MountainPage.tsx";

createRoot(document.getElementById("root")!).render(<MountainPage />);
