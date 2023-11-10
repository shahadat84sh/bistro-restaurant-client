import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Router/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import Authprovider from "./Provider/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
        <div className="max-w-7xl">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </Authprovider>
  </React.StrictMode>
);
