import styled from "styled-components";
import {myTheme} from "../styled/Them.styled.tsx";


type SectionTitlePropsType = {
    margin?: string
}


export const SectionTitle = styled.h2<SectionTitlePropsType>`
    margin:${props => props.margin || 0};
    font-weight: 600;
    font-size: 32px;
    color: ${myTheme.colors.accent};
`