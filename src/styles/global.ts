import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, textarea, input, button {
        font-family: 'Nunito', sans-serif;
    }
`;
