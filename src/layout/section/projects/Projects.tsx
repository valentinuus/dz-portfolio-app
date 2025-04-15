// import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {TabMenu, TabStatusType} from "../../../components/tabMenu/TabMenu.tsx";
import {Project} from "./project/Project.tsx";
import mapImg from "./../../../assets/images/map.jpg";
import targetImg from "./../../../assets/images/target.jpg";
import carImg from "./../../../assets/images/car.jpg";
import {useState} from "react";


const tabsItems: Array<{ status:  TabStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "CSS",
        status: "css"
    },
    {
        title: "HTML",
        status: "html"
    },
]

const projectsData = [
    {
        type: "css",
        src: mapImg,
        alt: "карта",
        title: "TWINDER",
        description: "A live Geolocation app for finding tweets and twitter users around you."
    },

    {
        type: "html",
        src: targetImg,
        alt: "карта",
        title: "LIVENTS",
        description: "A live Geolocation app for finding tweets and twitter users around you."
    },

    {
        src: carImg,
        alt: "карта",
        title: "MOOVE",
        description: "A live Geolocation app for finding tweets and twitter users around you",
    }
]


export const Projects = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filterProjects =  projectsData

    if(currentFilterStatus === "css"){
        filterProjects = projectsData.filter(project => project.type === "css")
    }

    if(currentFilterStatus === "html"){
        filterProjects = projectsData.filter(project => project.type === "html")
    }

    function changeFilterStatus(value: "all" | "css" | "html"){
        setCurrentFilterStatus(value)
    }

    return (
        <ProjectsSection>
            <Container>
                <SectionTitle>Featured projects:</SectionTitle>
                <ProjectsDescription>I have worked on many projects over the course of being a Web Developer, here are a
                    few of my live, real-world projects</ProjectsDescription>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}/>
                <ProjectWrapper>
                    {filterProjects.map((w) =>{
                        return <Project src={w.src} title={w.title} description={w.description}/>
                    })}
                </ProjectWrapper>
            </Container>
        </ProjectsSection>

    );
};


const ProjectsSection = styled.section`
    margin-top: 80px;
`

const ProjectWrapper = styled.ul`
    display: flex;
    gap: 17px;

    @media screen and (max-width: 1077px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

const ProjectsDescription = styled.p`
    margin-bottom: 36px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.8;
`

