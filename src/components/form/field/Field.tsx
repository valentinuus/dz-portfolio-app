import styled from "styled-components";
import {myTheme} from "../../../styled/Them.styled.tsx";


export const Field = styled.input.attrs((props) => ({
    type: props.type || "text",
    placeholder: props.placeholder
}))`
    width: 100%;
    min-height: 62px;
    border-radius: 8px;
    background-color: ${myTheme.colors.element};
    padding: 19px 0 19px 16px;

    font-weight: 500;
    font-size: 16px;
    color: #f5f5f5;

    border: 2px solid transparent;
    outline: none;

    &:nth-child(3) {
        padding: 37px 0 37px 16px;
    }

    &:focus {
        border-color: ${myTheme.colors.accent};
        box-shadow: 0 0 5px ${myTheme.colors.accent};
    }
`