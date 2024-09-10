import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./routes/AppRouter";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      throwOnError: true
    },
    mutations: {
      retry: 1,
      throwOnError: true
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
