import styled, {css} from "styled-components";
import {myTheme} from "../../styled/Them.styled.tsx";


type ButtonPropsType = {
    styles: 'fill' | 'outlined'
    // href: string
    icon?: boolean
    flexGrow?: number
}


export const Button = styled.a<ButtonPropsType>`
    padding: 12px 25px;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    
    color: ${myTheme.colors.font};
    flex-grow: ${props => props.flexGrow || 0};
    
    
    //fill
    ${props => props.styles === "fill" && css <ButtonPropsType>`
        background-color: ${myTheme.colors.accent};
        border: 2px solid ${myTheme.colors.accent};
        transition: filter 0.3s ease-in-out ;
        &:hover {
            filter: ${myTheme.filter.dropShadow};
        }
    `}
    
    //outlined
    ${props => props.styles === "outlined" && css <ButtonPropsType>`
        border: 2px solid ${myTheme.colors.accent};
        background-color: transparent;
        &:hover {
            filter: ${myTheme.filter.dropShadow};
        }
    `}
`

