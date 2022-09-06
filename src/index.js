import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getStorage } from "./storage";
import App from "./components/App/App.js";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);

const toDos = getStorage();

root.render(
  <StrictMode>
    <App toDos={toDos} />
  </StrictMode>
);
