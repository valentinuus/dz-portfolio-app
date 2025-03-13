import styled from "styled-components";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper as="ul" gap={"50px"} justify={"center"}>
                    <li>Fullstack Developer</li>
                    <li> UI Designer</li>
                    <li>Data Analyst</li>
                </FlexWrapper>
                <Copyright>@2025 Jayjay Dinero Dinero</Copyright>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    margin: 135px 0 40px;
    li, p {
        font-weight: 500;
        font-size: 16px;
        color: #fff;
        opacity: 0.5;
    }
    

`

const Copyright = styled.p`
    margin-top: 35px;
    text-align: center;
`