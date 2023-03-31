import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.scss";
import Another from "./screens/Another";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="another" element={<Another />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
