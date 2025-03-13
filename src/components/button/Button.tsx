import styled, {css} from "styled-components";
import {myTheme} from "../../styled/Them.styled.tsx";


type ButtonPropsType = {
    type: 'fill' | 'outlined'
    // href: string
    icon?: boolean
    flexGrow?: string
}


export const Button = styled.a<ButtonPropsType>`
    padding: 12px 25px;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    
    color: ${myTheme.colors.font};
    flex-grow: ${props => props.flexGrow || "0"};
    
    
    //fill
    ${props => props.type === "fill" && css <ButtonPropsType>`
        background-color: ${myTheme.colors.accent};
        border: 2px solid ${myTheme.colors.accent};
    `}
    
    //outlined
    ${props => props.type === "outlined" && css <ButtonPropsType>`
        border: 2px solid ${myTheme.colors.accent};
        background-color: transparent;
    `}
`

