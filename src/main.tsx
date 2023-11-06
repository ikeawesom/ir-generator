import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DetailsProvider } from "./contexts/DetailsContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DetailsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DetailsProvider>
  </React.StrictMode>
);
