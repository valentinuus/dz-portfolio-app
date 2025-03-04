// import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Service} from "./service/Service.tsx";


export const Services = () => {
    return (
        <SectionServices>
            <SectionTitle>The services i offer:</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"10px"}>
                <Service
                    iconId={"designing"}
                    title={"UI & UX DESIGNING"}
                    description={"I design beautiful web iterfaces with Figma and Adove XD"}/>
                <Service
                    iconId={"development"}
                    title={"WEB DEVELOPMENT"}
                    description={"I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS"}/>
                <Service
                    iconId={"mobile"}
                    title={"MOBILE DEVELOPMENT"}
                    description={"I am an expert mobile developer. I have experience using Flutter and React Native."}/>
                <Service
                    iconId={"version"}
                    title={"VERSION CONTROL"}
                    description={"I can use version control systems well, and Git & Mecurial are my go-to tool."}/>
                <Service
                    iconId={"npm"}
                    title={"NPM AND NODEJS"}
                    description={"I have core understanding of NPM. I can also develop general purpose applications with NodeJS"}/>
                <Service
                    iconId={"scraping"}
                    title={"WEB SCRAPING"}
                    description={"I can collect content and data from the internet then manipulate and analyze as needed."}/>
            </FlexWrapper>
        </SectionServices>
    );
};


const SectionServices = styled.section`
    background-color: #88f39d;
    min-height: 100vh;
`