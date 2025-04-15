import styled from "styled-components";
import photo from "../../../assets/images/man.png"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {myTheme} from "../../../styled/Them.styled.tsx";
import {font} from "../../../styled/Common.tsx";


export const Hero = () => {
    return (
        <SectionHero>
            <Container>
                <ContentWrapper>
                    <ContentDescription>
                        <FlexWrapper direction={"column"}>
                            <MainSalute> Hello, i’m</MainSalute>
                            <MainTitle>Jayjay D. Dinero</MainTitle>
                            <MainDescr>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web
                                experiences for end-users.</MainDescr>
                            <ButtonHeroWrap>
                                <Button styles={"fill"} href="#">About me</Button>
                                <Button styles={"outlined"} href="#">Projects</Button>
                            </ButtonHeroWrap>
                        </FlexWrapper>
                    </ContentDescription>
                    <PhotoWrapper>
                        <Photo src={photo}/>
                    </PhotoWrapper>
                </ContentWrapper>
            </Container>
        </SectionHero>
    );
};


const SectionHero = styled.section`
    position: relative;
    padding-bottom: 128px;
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 128px;
        background-color: #181824;
        bottom: 0;
        left: 0;
    }
`


const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 940px) {
        flex-direction: column;
        align-items: flex-start;
        padding-top: 60px;
    }
`

const ContentDescription = styled.div`
    @media ${myTheme.media.tablet} {
        margin-top: 60px;
    }
`

const MainSalute = styled.span`
    ${font({family: "\"Poppins\", sans-serif", weight: 600, color: "#f5f5f5", Fmin: 24, Fmax: 32})}
`

const MainTitle = styled.h1`
    ${font({family: "\"Poppins\", sans-serif", weight: 600, color: "#f5f5f5", Fmin: 38, Fmax: 52})}
    margin: 6px 0 12px;
`

const MainDescr = styled.p`
    max-width: 435px;
    font-weight: 500;
    font-size: 18px;
`

const ButtonHeroWrap = styled.div`
    display: flex;
    gap: 32px;
    margin: 30px 0 49px;

    @media (max-width: 940px) {
        margin-bottom: 0;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    display: flex;
    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        bottom: -125px;
        right: -9px;
        width: 486px;
        height: 486px;
        border-radius: 50%;
        background-color: ${myTheme.colors.accent};
    }

    @media (max-width: 940px) {
        &::after {
            width: 330px;
            height: 330px;
            bottom: -81px;
            right: 50%;
            transform: translateX(50%);
        }
    }
`

const Photo = styled.img`
    z-index: 2;
    margin-top: 117px;
    width: 444px;
    height: 444px;
    object-fit: cover;
    
    @media (max-width: 940px) {
        margin: 76px auto 0;
        width: 300px;
        height: 300px;
    }
`
