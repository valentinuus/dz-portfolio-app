// import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import mapImg from "./../../../assets/images/map.jpg";
import targetImg from "./../../../assets/images/target.jpg";
import carImg from "./../../../assets/images/car.jpg";





export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Featured projects:</SectionTitle>
            <p>I have worked on many projects over the course of being a Web Developer, here are a few of my live,
                real-world projects</p>
            <FlexWrapper justify={"space-between"}>
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
                    description={"A live Geolocation app for finding tweets and twitter users around you."}
                />

            </FlexWrapper>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #ef9494;
`