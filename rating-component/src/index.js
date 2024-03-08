import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import SubmittedPage from "./SubmittedPage";
import { RateProvider } from "./context/RateContext";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/submit" element={<SubmittedPage />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RateProvider>
      <Index />
    </RateProvider>
  </React.StrictMode>
);
