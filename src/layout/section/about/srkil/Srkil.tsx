// import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";


type SkillPropsType ={
    icon: string,
    title: string
}



export const Skill = (props: SkillPropsType) => {
    return (
        <SkillStyled>
            <Icon iconId={props.icon}/>
            <Title>{props.title}</Title>
        </SkillStyled>
    );
};


const SkillStyled = styled.div`
    background-color: rgba(255, 255, 255, 0.38);
`

const Title = styled.h3`

`

