// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";


type ServicePropsType = {
    iconId: string,
    title: string,
    description: string
}


export const Service = (props: ServicePropsType) => {
    return (

        <StyledService>
            <Icon iconId={props.iconId}/>
            <ServiceTitle>{props.title}</ServiceTitle>
            <ServiceText>{props.description}</ServiceText>
        </StyledService>

    );
};


const StyledService = styled.div`
    flex: 0 0 30%;
    align-self: stretch;
    background-color: rgba(255, 255, 255, 0.3);
`

const ServiceTitle = styled.h3`

`

const ServiceText = styled.p`

`