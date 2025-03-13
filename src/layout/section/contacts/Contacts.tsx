import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Link} from "./link/Link.tsx";
import {Field} from "../../../components/form/field/Field.tsx";
import {Container} from "../../../components/Container.tsx";


export const Contacts = () => {
    return (
        <Container>
            <StyledContacts>
                <FlexWrapper direction={"column"}>
                    <SectionTitle margin={"0 0 16px"}>Connect with me:</SectionTitle>
                    <FooterDescription>Satisfied with me? Please contact me</FooterDescription>
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
                            type='text-aria'
                        />
                    </Form>
                </FlexWrapper>
            </StyledContacts>
        </Container>
    );
};


const StyledContacts = styled.footer`
    display: flex;
    padding-top: 128px;

    .flex-wrapper {
        flex-basis: 50%;
    }
`

const FooterDescription = styled.p`
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 18px;
`


const ContactDescription = styled.p`
    font-weight: 500;
    font-size: 24px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 472px;
    width: 100%;
`
