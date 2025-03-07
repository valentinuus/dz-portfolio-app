import styled from "styled-components";
import {myTheme} from "../../styled/Them.styled.tsx";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 20px;

        & a {
            color: ${myTheme.colors.font};
            &:hover{
                color: ${myTheme.colors.accent};
                transition: color 0.3s ease-in-out;
            }
        }

    }
`