import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Router/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import Authprovider from "./Provider/Authprovider.jsx";
import {
  QueryClientProvider,
  QueryClient
} from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-7xl">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </Authprovider>
  </React.StrictMode>
);
