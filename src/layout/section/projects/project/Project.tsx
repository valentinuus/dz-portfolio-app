// import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Button} from "../../../../components/button/Button.tsx";
import styled from "styled-components";


type ProjectPropsType = {
    src: string
    alt?: string
    title: string
    description: string
}


export const Project = (props:ProjectPropsType) => {
    return (
        <StyledProject>
            <Images src={props.src} alt={props.alt}/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <FlexWrapper>
                <Button></Button>
                <Button></Button>
            </FlexWrapper>
        </StyledProject>
    );
};


const StyledProject = styled.div`
    background-color: #f4e8ab;
`

const Images = styled.img`

`

const Title = styled.h3`

`

const Description = styled.p`

`