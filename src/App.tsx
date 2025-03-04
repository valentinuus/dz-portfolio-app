// import { useState } from 'react'
import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Hero} from "./layout/section/hero/Hero.tsx";
import {About} from "./layout/section/about/About.tsx";
import {Services} from "./layout/section/services/Services.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {

    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Services/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default App
