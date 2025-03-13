// import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import mapImg from "./../../../assets/images/map.jpg";
import targetImg from "./../../../assets/images/target.jpg";
import carImg from "./../../../assets/images/car.jpg";
import {Container} from "../../../components/Container.tsx";


export const Projects = () => {
    return (

        <ProjectsSection>
            <Container>
                <SectionTitle margin={"80px 0 16px"}>Featured projects:</SectionTitle>
                <ProjectsDescription>I have worked on many projects over the course of being a Web Developer, here are a
                    few of my live,
                    real-world projects</ProjectsDescription>
                <ProjectWrapper>
                    <Project
                        src={mapImg}
                        alt={"карта"}
                        title={"TWINDER"}
                        description={"A live Geolocation app for finding tweets and twitter users around you."}
                    />

                    <Project
                        src={targetImg}
                        alt={"карта"}
                        title={"LIVENTS"}
                        description={"A live Geolocation app for finding tweets and twitter users around you."}
                    />

                    <Project
                        src={carImg}
                        alt={"карта"}
                        title={"MOOVE"}
                        description={"A live Geolocation app for finding tweets and twitter users around you.A live Geolocation app for finding tweets and twitter users around you."}
                    />

                </ProjectWrapper>
            </Container>
        </ProjectsSection>

    );
};


const ProjectsSection = styled.section`

`

const ProjectWrapper = styled.ul`
    display: flex;
    gap: 17px;
`

const ProjectsDescription = styled.p`
    margin-bottom: 36px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.8;
`