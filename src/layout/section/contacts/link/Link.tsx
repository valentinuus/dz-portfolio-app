// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {myTheme} from "../../../../styled/Them.styled.tsx";


type LinkPropsType = {
    icon: string
    href: string
    fill?: string
    stroke?: string
    width?: string
    height?: string
    viewBox?: string
}


export const Link = (props: LinkPropsType) => {
    return (
        <LinkFooter href={props.href}>
            <Icon
                iconId={props.icon}
                fill={props.fill || `${myTheme.colors.accent}`}
                stroke={props.stroke || "none"}
                width={props.width || "32px"}
                height={props.height || "32px"}
                viewBox={props.viewBox || "0 0 32 32"}
            />
        </LinkFooter>
    );
};


const LinkFooter = styled.a`

`
