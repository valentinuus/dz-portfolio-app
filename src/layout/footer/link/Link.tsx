// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";


type LinkPropsType = {
    icon: string
    href: string
    fill?: string
    stroke?: string
}


export const Link = (props: LinkPropsType) => {
    return (
        <LinkFooter href={props.href}>
            <Icon iconId={props.icon} fill={props.fill} stroke={props.stroke}/>
        </LinkFooter>
    );
};


const LinkFooter = styled.a`

`
