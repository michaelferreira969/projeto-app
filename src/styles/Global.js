import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothin: antialiased;
        font-family: 'Mulish', sans-serif;
        font-family: 'Space Mono', monospace; 
    }

    body {
        background: #c5e4e7;

    }
`