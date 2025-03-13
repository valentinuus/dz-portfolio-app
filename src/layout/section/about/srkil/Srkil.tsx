// import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {myTheme} from "../../../../styled/Them.styled.tsx";


type SkillPropsType = {
    iconId: string,
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    stroke?: string
    title: string
}


export const Skill = (props: SkillPropsType) => {
    return (
        <SkillStyled>
            <Icon
                iconId={props.iconId}
                width={props.width}
                height={props.height}
                viewBox={props.viewBox}
                stroke={props.stroke || `${myTheme.colors.font}`}
                fill={props.fill || "none"}
            />
            <Title>{props.title}</Title>
        </SkillStyled>
    );
};


const SkillStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 6px;

    flex: 0 1 25%;
    align-self: stretch;

    padding: 24px 24px 24px 24px;
    aspect-ratio: 1/1;

    background-color: ${myTheme.colors.grey.light};
    color: ${myTheme.colors.font};
    font-size: 24px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${myTheme.colors.accent};
    }
`

const Title = styled.h3`
    text-transform: uppercase;
    font-size: 24px;
`

