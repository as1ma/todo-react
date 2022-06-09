import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("app");
const root = createRoot(container);

const toDos = [
  // { name: "Learn React", done: true },
  // { name: "Learn Vue", done: false },
  // { name: "Learn Svelte", done: false },
];

root.render(<App toDos={toDos} />);
