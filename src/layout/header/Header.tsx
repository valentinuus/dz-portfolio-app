// import React from 'react';
// import {myTheme} from "../../styled/Them.styled.tsx";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";


const items =["Home", "About me", "Projects", "Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    background-color: #e8e8e8; //temp
`