import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./srkil/Srkil.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {myTheme} from "../../../styled/Them.styled.tsx";


export const About = () => {
    return (

        <SectionAbout>
            <Container>
                <SectionTitle>About me:</SectionTitle>
                <AboutDescription>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and
                    Mobile developer. I have honed my skills in Web Development and advance i have core understanding of
                    advance UI design principles. Here are the major skills i have.
                </AboutDescription>
                <FlexWrapper className="about-experience__wrap" align={"center"} gap={"22px"}>
                    <AboutExperienceYears>5+</AboutExperienceYears>
                    <AboutExperienceDescr>Years of experience. Specialised in building apps, while ensuring a seamless web
                        experience for end users.
                    </AboutExperienceDescr>
                </FlexWrapper>
                <FlexWrapper className="skills__wrap" justify={"space-between"} gap={"17px"} wrap={"wrap"}>
                    <Skill
                        iconId={"designing"}
                        width={"42px"}
                        height={"42px"}
                        viewBox={"0 0 42 42"}
                        fill={myTheme.colors.font}
                        title={"ui & ux designing"}
                    />
                    <Skill
                        iconId={"development"}
                        width={"52px"}
                        height={"52px"}
                        viewBox={"0 0 52 52"}
                        title={"web development"}
                    />
                    <Skill
                        iconId={"mobile"}
                        width={"62px"}
                        height={"62px"}
                        viewBox={"0 0 62 62"}
                        title={"mobile development"}
                    />
                    <Skill
                        iconId={"python"}
                        width={"55px"}
                        height={"55px"}
                        viewBox={"0 0 55 55"}
                        title={"web scraping with python"}
                    />
                </FlexWrapper>
            </Container>
        </SectionAbout>

    );
};

const SectionAbout = styled.section`
    margin-top: 55px;

    .about-experience__wrap {
        margin: 23px 0 58px;
    }


    @media ${myTheme.media.mobile} {
        .about-experience__wrap {
            margin-top: 20px;
            align-items: flex-start;
            flex-direction: column;
            line-height: 1.2;
            gap: 0;
        }

        .skills__wrap {
            justify-content: center;
        }
    }
`




const AboutDescription = styled.p`
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.77778;
    color: ${myTheme.colors.font};
`


const AboutExperienceYears = styled.span`
    font-size: 96px;
    color: ${myTheme.colors.accent};
`

const AboutExperienceDescr = styled.p`
    font-weight: 500;
    font-size: 24px;
    color: #fff;
`