import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {myTheme} from "./styled/Them.styled.tsx";
import {GlobalStyles} from "./styled/GlobalStyle.tsx";


createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={myTheme}>
        <App/>
        <GlobalStyles/>
    </ThemeProvider>,
)
