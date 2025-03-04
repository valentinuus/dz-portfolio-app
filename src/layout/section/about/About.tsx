import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./srkil/Srkil.tsx";
import styled from "styled-components";


export const About = () => {
    return (
        <SectionAbout>
            <h2>About me:</h2>
            <p>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I
                have honed my skills in Web Development and advance i have core understanding of advance UI design
                principles. Here are the major skills i have.</p>
            <FlexWrapper>
                <span>5+</span>
                <p>Years of experience. Specialised in building apps, while ensuring a seamless web experience for end
                    users.</p>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <Skill
                    icon={"designing"}
                    title={"ui & ux designing"}
                />
                <Skill
                    icon={"development"}
                    title={"web development"}
                />
                <Skill
                    icon={"mobile"}
                    title={"mobile development"}
                />
                <Skill
                    icon={"version"}
                    title={"web scraping with python"}
                />
            </FlexWrapper>

        </SectionAbout>
    );
};

const SectionAbout = styled.section`
    min-height: 100vh;
    background-color: rgba(129, 253, 230, 0.56);
`