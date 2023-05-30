import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RemirrorEditor from "./Remirror";
import Basic from "./Markdown";
import New from "./New";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/remirror" element={<RemirrorEditor />} />
        <Route path="/markdown" element={<Basic />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
