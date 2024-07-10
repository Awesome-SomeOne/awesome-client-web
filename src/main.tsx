import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import AppRouter from "./routes/AppRouter";
import { Theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        {/* global style 추가 필요 */}
        <AppRouter />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);
