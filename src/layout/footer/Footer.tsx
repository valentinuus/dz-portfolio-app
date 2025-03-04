// import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {Link} from "./link/Link.tsx";
import {Field} from "../../components/form/field/Field.tsx";



export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"}>
                <SectionTitle>Connect with me:</SectionTitle>
                <FooterDescription>Satisfied with me? Please contact me</FooterDescription>
                <FlexWrapper>
                    <Link
                        icon={"fb"}
                        fill={"#7562E0"}
                        stroke={"none"}
                        href={"#"}
                    />
                    <Link
                        icon={"instagram"}
                        fill={"#7562E0"}
                        stroke={"none"}
                        href={"#"}
                    />
                    <Link
                        icon={"dribble"}
                        fill={"#7562E0"}
                        stroke={"none"}
                        href={"#"}
                    />
                    <Link
                        icon={"mail"}
                        fill={"#7562E0"}
                        stroke={"none"}
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
                        type='text'
                    />
                </Form>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    display: flex;
    
    background-color: rgba(185, 69, 243, 0.72);
    min-height: 50vh;
    
`

const FooterDescription = styled.p`
    display: flex;
`

const ContactDescription = styled.p`
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
