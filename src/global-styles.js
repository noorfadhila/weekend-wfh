import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Work Sans';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #ffffff;
        font-size: 16px;
    }

    p{
        margin-bottom: 0px;
    }
`