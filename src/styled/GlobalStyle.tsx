import {createGlobalStyle} from "styled-components";
import './fonts.css';
import {myTheme} from "./Them.styled.tsx";


export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        border: none;
        box-sizing: border-box;
        text-align: start;
    }

    a,
    a:link,
    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }
    
    ul,
    ul li {
        list-style: none;
    }
    
    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
  
        font-weight: 600;
        
        color: ${myTheme.colors.font};
        background-color: ${myTheme.colors.dark};
    }
`




