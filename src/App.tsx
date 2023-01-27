import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppRouter } from "./router";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/DefaultTheme";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
