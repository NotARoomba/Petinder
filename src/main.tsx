import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/index.css";
import Home from "./tsx/pages/Home";
import Adopt from "./tsx/pages/Adopt";
import Error from "./tsx/pages/Error";
import Centers from "./tsx/pages/Centers";
import WeAdopt from "./tsx/pages/WeAdopt";
import NavBar from "./tsx/components/NavBar";
import BottomBar from "./tsx/components/Bottombar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} errorElement={<Error />} />
      <Route path="/adopta" element={<Adopt />} errorElement={<Error />} />
      <Route path="/centros" element={<Centers />} errorElement={<Error />} />
      <Route path="/adoptamos" element={<WeAdopt />} errorElement={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <BottomBar />
  </BrowserRouter>,
  //</React.StrictMode>
);
