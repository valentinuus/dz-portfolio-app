import {Header} from "./layout/header/Header.tsx";
import {Hero} from "./layout/section/hero/Hero.tsx";
import {About} from "./layout/section/about/About.tsx";
import {Services} from "./layout/section/services/Services.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Contacts} from "./layout/section/contacts/Contacts.tsx";

function App() {

    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Services/>
            <Projects/>
            <Contacts/>
        </>
    )
}

export default App
