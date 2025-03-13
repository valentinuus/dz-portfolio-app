import styled from "styled-components";
import {myTheme} from "../../../styled/Them.styled.tsx";


export const Field = styled.input.attrs((props) => ({
    type: props.type || "text",
    placeholder: props.placeholder
}))`
    width: 100%;
    height: 62px;
    border-radius: 8px;
    background-color: ${myTheme.colors.element};


    font-weight: 500;
    font-size: 16px;
    color: #f5f5f5;
`