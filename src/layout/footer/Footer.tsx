import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {Link} from "../section/contacts/link/Link.tsx";
import {Field} from "../../components/form/field/Field.tsx";
import {Button} from "../../components/button/Button.tsx";
import {Container} from "../../components/Container.tsx";
import {myTheme} from "../../styled/Them.styled.tsx";
// import emailjs from '@emailjs/browser';
// import {useRef} from "react";



export const Footer = () => {
    // const form = useRef<ElementRef<'form'>>(null);

    // const sendEmail = (e: any) => {
    //     e.preventDefault();
    //
    //     if (!form.current) return
    //
    //     emailjs
    //         .sendForm('service_djuyeuv', 'template_kuhzypf', form.current, {
    //             publicKey: 'LeEC6rkZFHzgH1zgU',
    //         })
    //         .then(
    //             () => {
    //                 console.log('SUCCESS!');
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //             },
    //         );
    // };

    return (
        <FooterSection>
            <Container>
                <FooterWrap>
                    <FooterTitleWrap>
                        <SectionTitle className={"footer-title"}>Connect with me:</SectionTitle>
                        <SocialDescription>Satisfied with me? Please contact me</SocialDescription>
                    </FooterTitleWrap>
                    <SocialWrapper>
                        <FlexWrapper gap={"16px"}>
                            <Link
                                icon={"fb"}
                                href={"#"}
                            />
                            <Link
                                icon={"instagram"}
                                href={"#"}
                            />
                            <Link
                                icon={"dribble"}
                                href={"#"}
                            />
                            <Link
                                icon={"mail"}
                                href={"#"}
                            />
                        </FlexWrapper>
                    </SocialWrapper>
                    <FormWrapper>
                        <ContactDescription>Contact me, let’s make magic together</ContactDescription>
                        {/*<Form ref={form} onSubmit={sendEmail}>*/}
                        <Form>
                            <Field
                                placeholder="Name:"
                                type='text'
                                name={"user_name"}
                            />
                            <Field
                                placeholder="Email:"
                                type='email'
                                name={"subject"}
                            />


                            <Field as={"textarea"}
                                   placeholder="Message:"
                                   type="text-aria"
                                   name={"message"}
                            />
                            <Button as="button" styles={"fill"}>Send</Button>
                        </Form>
                    </FormWrapper>
                    <FooterSkills>
                        <li>Fullstack Developer</li>
                        <li>UI Designer</li>
                        <li>Data Analyst</li>
                    </FooterSkills>
                    <Copyright>@2025 Jayjay Dinero Dinero</Copyright>
                </FooterWrap>
            </Container>
        </FooterSection>
    );
};

const FooterSection = styled.footer`
    margin: 135px 0 40px;
`


const FooterWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(90px, auto) auto auto auto;
    column-gap: 60px;

    @media ${myTheme.media.tablet} {
        column-gap: 0;
        grid-template-columns:  1fr;
        grid-auto-rows: minmax(10px, auto);

    }
`


const FooterTitleWrap = styled.div`
    grid-area: 1/1/2/2;

    @media ${myTheme.media.tablet} {
        grid-area: 1/1/2/2;
    }
`

const SocialDescription = styled.p`
    margin: 16px 0 24px;
    font-weight: 500;
    font-size: 18px;

    @media ${myTheme.media.tablet} {
        display: none;
    }
`

const SocialWrapper = styled.div`
    grid-area: 2/1/3/2;

    @media ${myTheme.media.tablet} {
        grid-area: 4/1/5/2;
        justify-self: center;
        margin-bottom: 57px;
    }
`


const FormWrapper = styled.div`
    grid-area: 1/2/3/3;

    @media ${myTheme.media.tablet} {
        grid-area: 2/1/3/2;
    }
`


const ContactDescription = styled.p`
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 24px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 472px;
    width: 100%;

    button {
        max-width: 174px;
        padding: 16px 66px;
        font-size: 16px;
    }

    @media ${myTheme.media.tablet} {
        max-width: 100%;
    }
`


const FooterSkills = styled.ul`
    display: flex;

    column-gap: 50px;
    justify-content: center;
    grid-area: 3/1/4/3;
    margin: 135px 0 35px;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    opacity: 0.5;

    @media ${myTheme.media.tablet} {
        margin: 100px 0 30px;
        justify-self: center;
        grid-area: 3/1/4/3;
        flex-direction: column;
        row-gap: 21px;
        & li {
            text-align: center;
        }
    }
`


const Copyright = styled.p`
    justify-self: center;
    grid-area: 4/1/5/3;

    font-weight: 500;
    font-size: 16px;
    color: #fff;
    opacity: 0.5;

    @media ${myTheme.media.tablet} {
        grid-area: 5/1/6/2;
    }
`