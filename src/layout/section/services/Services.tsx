import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Service} from "./service/Service.tsx";
import {Container} from "../../../components/Container.tsx";
import {myTheme} from "../../../styled/Them.styled.tsx";


export const Services = () => {
    return (

        <SectionServices>
            <Container>
                <SectionTitle margin={"0 0 32px 0"}>The services i offer:</SectionTitle>
                <ServicesWrapper>
                    <Service
                        iconId={"designing"}
                        fill={`${myTheme.colors.font}`}
                        stroke={`${myTheme.colors.font}`}
                        width={"56px"}
                        height={"56px"}
                        viewBox={"0 0 56 56"}
                        title={"UI & UX DESIGNING"}
                        description={"I design beautiful web iterfaces with Figma and Adove XD"}/>
                    <Service
                        iconId={"development"}
                        width={"57px"}
                        height={"57px"}
                        viewBox={"0 0 57 57"}
                        title={"WEB DEVELOPMENT"}
                        description={"I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS"}/>
                    <Service
                        iconId={"mobile"}
                        width={"70px"}
                        height={"70px"}
                        viewBox={"0 0 70 70"}
                        title={"MOBILE DEVELOPMENT"}
                        description={"I am an expert mobile developer. I have experience using Flutter and React Native."}/>
                    <Service
                        iconId={"version"}
                        width={"62px"}
                        height={"62px"}
                        viewBox={"0 0 62 62"}
                        title={"VERSION CONTROL"}
                        description={"I can use version control systems well, and Git & Mecurial are my go-to tool."}/>
                    <Service
                        iconId={"npm"}
                        width={"54px"}
                        height={"54px"}
                        viewBox={"0 0 54 54"}
                        title={"NPM AND NODEJS"}
                        description={"I have core understanding of NPM. I can also develop general purpose applications with NodeJS"}/>
                    <Service
                        iconId={"scraping"}
                        width={"48px"}
                        height={"48px"}
                        viewBox={"0 0 48 48"}
                        fill={`${myTheme.colors.font}`}
                        title={"WEB SCRAPING"}
                        description={"I can collect content and data from the internet then manipulate and analyze as needed."}/>
                </ServicesWrapper>
            </Container>
        </SectionServices>

    );
};


const SectionServices = styled.section`
    margin-top: 80px;
`

const ServicesWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 22px;
    row-gap: 16px;
`