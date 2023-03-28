import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RemirrorEditor from "./Remirror";
import Basic from "./Markdown";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/remirror" element={<RemirrorEditor />} />
        <Route path="/markdown" element={<Basic />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
