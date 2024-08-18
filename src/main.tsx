import { StrictMode } from "react";
import { ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import AppRouter from "./routes/AppRouter";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);
