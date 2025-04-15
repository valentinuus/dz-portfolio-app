import styled, {css} from "styled-components";
import {myTheme} from "../../../styled/Them.styled.tsx";
import {useState} from "react";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }


    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                setmenuIsOpen(false)
            }}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href="">{item}</a>
                            </li>
                        )
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
    display: none;

    @media ${myTheme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    z-index: 99999;
    right: 15px;
    top: 19px;
    width: 30px;
    height: 30px;
    background-color: transparent;

    span {
        position: absolute;
        display: block;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 23px;
        height: 2px;
        background-color: ${myTheme.colors.font};

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &:before,
        &::after {
            content: "";
            position: absolute;
            display: block;
            width: 23px;
            height: 2px;
            background-color: ${myTheme.colors.font};
            left: 0;

        }

        &:before {
            transform: translateY(-6px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0px) rotate(-45deg);
            `}
        }

        &::after {
            transform: translateY(6px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0px) rotate(45deg);
            `}
        }
    }
}
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    z-index: 9999;
    inset: 0 0 0 0;
    background-color: ${myTheme.colors.dark};
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        & a {
            color: ${myTheme.colors.font};

            &:hover {
                color: ${myTheme.colors.accent};
                transition: color 0.3s ease-in-out;
            }
        }
    }
`