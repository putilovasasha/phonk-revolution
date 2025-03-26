import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/index.css";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
