import styled from "styled-components";
import photo from "../../../assets/images/man.png"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {myTheme} from "../../../styled/Them.styled.tsx";


export const Hero = () => {
    return (
        <section>
            <Container>
                <FlexWrapper justify={"space-between"} align={"end"}>
                    <FlexWrapper direction={"column"}>
                        <MainSalute> Hello, i’m</MainSalute>
                        <MainTitle>Jayjay D. Dinero</MainTitle>
                        <MainDescr>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</MainDescr>
                        <ButtonHeroWrap>
                            <Button type={"fill"} href="#">About me</Button>
                            <Button type={"outlined"} href="#">Projects</Button>
                        </ButtonHeroWrap>
                    </FlexWrapper>
                    <FlexWrapper>
                        <Photo src={photo}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </section>
    );
};


const MainSalute = styled.span`
    font-size: 32px;
`

const MainTitle = styled.h1`
    margin: 6px 0 12px;
    color: #f5f5f5;
    font-size: 52px;
    font-weight: 600;
`

const MainDescr = styled.p`
    max-width: 435px;
    font-weight: 500;
    font-size: 18px;
`

const ButtonHeroWrap = styled.div`
    display: flex;
    gap: 32px;
    margin:30px 0 49px;
`

const Photo = styled.img`
    position: relative;
    margin-top: 117px;

    width: 444px;
    height: 444px;
    object-fit: cover;

    &:before {
        position: absolute;
        z-index: 10;
        content: "";
        top: 0;
        left: 0;
        max-width: 486px;
        max-height: 486px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${myTheme.colors.accent};
    }
`
