import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import { StompSessionProvider } from "react-stomp-hooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StompSessionProvider url="ws://localhost:8080/ws">
      <RouterProvider router={router} />
    </StompSessionProvider>
  </React.StrictMode>
);
