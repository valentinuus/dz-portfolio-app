// import React from 'react';


import styled from "styled-components";

export const Field = styled.input.attrs((props) => ({
    type: props.type || "text",
    placeholder: props.placeholder || "temp"
}))`
    width: 300px;
`