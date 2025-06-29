import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// Get the root DOM node
const container = document.getElementById("root");

// Create a root and render App
const root = createRoot(container);
root.render(<App />);
