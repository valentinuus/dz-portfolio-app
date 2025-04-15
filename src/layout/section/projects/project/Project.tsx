// import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Button} from "../../../../components/button/Button.tsx";
import styled from "styled-components";
import {myTheme} from "../../../../styled/Them.styled.tsx";


type ProjectPropsType = {
    src: string
    alt?: string
    title: string
    description: string
    type?: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImagesWrap>
                <Images src={props.src} alt={props.alt}/>
            </ImagesWrap>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <FlexWrapper gap={"18px"}>
                <Button styles={"fill"} flexGrow={1}>View Live</Button>
                <Button styles={"outlined"} flexGrow={1}>Github Repo</Button>
            </FlexWrapper>
        </StyledProject>
    );
};


const StyledProject = styled.li`
    padding: 16px 16px 23px;
    border-radius: 8px;

    min-height: 417px;
    flex: 0 1 344px;
    align-self: flex-start;
    background-color: ${myTheme.colors.element};
`


const ImagesWrap = styled.div`
    position: relative;
    border: 2px solid ${myTheme.colors.accent};
    border-radius: 8px;
    width: 311px;
    height: 173px;
    overflow: hidden;

    &:before {
        position: absolute;
        display: block;
        content: "";
        z-index: 5;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(24, 24, 36, 0.25) 0%, rgba(117, 98, 224, 0.5) 100%);
    }
`

const Images = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Title = styled.h3`
    font-size: 24px;
    color: ${myTheme.colors.accent};
`

const Description = styled.p`
    padding: 5px 0 24px;
    font-weight: 500;
    font-size: 18px;
`