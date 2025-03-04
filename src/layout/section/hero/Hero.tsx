// import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/man.png"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";



export const Hero = () => {
    return (
        <section>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <FlexWrapper direction={"column"}>
                    <MainSalute> Hello, i’m</MainSalute>
                    <MainTitle>Jayjay D. Dinero</MainTitle>
                    <MainDescr>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</MainDescr>
                    <FlexWrapper>
                        <a href="">About me</a>
                        <a href="">Projects</a>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper>
                    <Photo src={photo}/>
                </FlexWrapper>
            </FlexWrapper>
        </section>
    );
};


const MainSalute = styled.span`
    font-size: 32px;
`

const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 52px;
`

const MainDescr = styled.p`
    font-weight: 500;
    font-size: 18px;
`

const Photo = styled.img`
    width: 444px;
    height: 444px;
    object-fit: cover;
`
