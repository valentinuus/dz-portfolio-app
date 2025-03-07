import {Icon} from "../icon/Icon.tsx";
import {myTheme} from "../../styled/Them.styled.tsx";
import styled from "styled-components";


export const Logo = () => {
    return (
        <StyledLinkLogo href="#">
            <Icon
                iconId={"logo"}
                height={"30"}
                width={"194"}
                viewBox={"0 0 194 30"}
                fill={myTheme.colors.accent}/>
        </StyledLinkLogo>
    );
};

const StyledLinkLogo = styled.a`
    display: flex;  //костыль
`


