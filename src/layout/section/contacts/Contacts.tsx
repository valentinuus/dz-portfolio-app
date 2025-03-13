import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Link} from "./link/Link.tsx";
import {Field} from "../../../components/form/field/Field.tsx";
import {Container} from "../../../components/Container.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {myTheme} from "../../../styled/Them.styled.tsx";


export const Contacts = () => {
    return (

        <StyledContacts>
            <Container>
                <ContactsWrap>
                    <FlexWrapper direction={"column"}>
                        <SectionTitle margin={"0 0 16px"}>Connect with me:</SectionTitle>
                        <SocialDescription>Satisfied with me? Please contact me</SocialDescription>
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
                    </FlexWrapper>
                    <FlexWrapper direction={"column"}>
                        <ContactDescription>Contact me, let’s make magic together</ContactDescription>
                        <Form>
                            <Field
                                placeholder="Name:"
                                type='text'
                            />
                            <Field
                                placeholder="Email:"
                                type='email'
                            />
                            <Field
                                placeholder="Message:"
                                type="text-aria"
                            />
                            <Button as="button" styles={"fill"}>Send</Button>
                        </Form>
                    </FlexWrapper>
                </ContactsWrap>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
    svg:hover {
        filter: ${myTheme.filter.dropShadow};
    }
`

const ContactsWrap = styled.div`
    display: flex;
    padding-top: 128px;

    .flex-wrapper {
        flex-basis: 50%;
    }
`


const SocialDescription = styled.p`
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 18px;
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
`
