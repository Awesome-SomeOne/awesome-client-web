import { ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./routes/AppRouter";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  </StrictMode>
);
