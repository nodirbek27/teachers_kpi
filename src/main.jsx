import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./root";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import SidebarProvider from "./utils/context/SidebarProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "./components/Loading";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <BrowserRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Suspense fallback={<Loading />}>
            <Root />
          </Suspense>
        </BrowserRouter>
      </SidebarProvider>
    </QueryClientProvider>
  </StrictMode>
);
