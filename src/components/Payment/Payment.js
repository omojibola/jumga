import React from "react";
import {OrderedList, PaymentForm, ListItem,
    PaymentHeading, PayParagraph, PaymentInfo, Details, FormContainer,
    FormLabel, FormInput, FormItem, FormLine, StyledForm, PaymentText, InputBox, ReturnLink} from "./PaymentElements";
import {LinkTag} from "../Header/HeaderElements";
import OrderTotal from "../OrderTotal";
import {useHistory} from "react-router-dom";
import ButtonName from "../Button/ButtonName";


const Payment = () => {
    const history = useHistory();
    return (
        <PaymentForm>
            <PaymentInfo>
                <OrderedList>
                    <LinkTag to={'/payment'}>
                        <ListItem color>Shipping</ListItem>
                    </LinkTag>
                    <LinkTag to={'/paymentTwo'}>
                        <ListItem>Payment</ListItem>
                    </LinkTag>
                    <LinkTag to={'/payment'}>
                        <ListItem>Confirmation</ListItem>
                    </LinkTag>
                </OrderedList>
                <PaymentHeading>Shipping Details</PaymentHeading>
                <PayParagraph>If you already have an account, <ReturnLink to={'/login'}>sign in here</ReturnLink> </PayParagraph>

                <Details>
                    <FormContainer
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            phoneNumber: '',
                            email: '',
                            address1: '',
                            address2: '',
                            zipCode: '',
                            city: '',
                            country: '',
                            state: ''
                        }}
                    >
                        <StyledForm>
                            <FormLine>
                                <FormItem>
                                    <FormLabel htmlFor={'firstName'}>First Name</FormLabel>
                                    <FormInput type={'text'} name={'fistName'} />
                                </FormItem>
                                <FormItem>
                                    <FormLabel htmlFor={'lastName'}>Last Name</FormLabel>
                                    <FormInput type={'text'} name={'lastName'} />
                                </FormItem>
                            </FormLine>
                            <FormLine>
                                <FormItem>
                                    <FormLabel htmlFor={'phoneNumber'}>Phone Number</FormLabel>
                                    <FormInput type={'tel'} name={'phoneNumber'} />
                                </FormItem>
                                <FormItem>
                                    <FormLabel htmlFor={'email'}>Email</FormLabel>
                                    <FormInput type={'email'} name={'email'} />
                                </FormItem>
                            </FormLine>
                            <FormLine>
                                <FormItem>
                                    <FormLabel htmlFor={'address1'}>Address 1</FormLabel>
                                    <FormInput type={'text'} name={'address1'} />
                                </FormItem>
                                <FormItem>
                                    <FormLabel htmlFor={'address2'}>Address 2</FormLabel>
                                    <FormInput type={'text'} name={'address2'} />
                                </FormItem>
                            </FormLine>
                            <FormLine>
                                <FormItem>
                                    <FormLabel htmlFor={'zipCode'}>Zip Code</FormLabel>
                                    <FormInput type={'text'} name={'zipCode'} />
                                </FormItem>
                                <FormItem>
                                    <FormLabel htmlFor={'city'}>City</FormLabel>
                                    <FormInput type={'text'} name={'city'} />
                                </FormItem>
                            </FormLine>
                            <FormLine>
                                <FormItem>
                                    <FormLabel htmlFor={'country'}>Country</FormLabel>
                                    <FormInput type={'text'} name={'country'} />
                                </FormItem>
                                <FormItem>
                                    <FormLabel htmlFor={'state'}>State</FormLabel>
                                    <FormInput type={'text'} name={'state'} />
                                </FormItem>
                            </FormLine>
                        </StyledForm>
                    </FormContainer>
                    <PaymentText>
                        <InputBox type="checkbox"/>
                        My Billing address is the same as my delivery address
                    </PaymentText>
                    <FormLine>
                        <ReturnLink to={'/checkout'}>Back to Cart</ReturnLink>
                        <ButtonName onClick={() => history.push('/paymentTwo')}>Continue to Payment</ButtonName>
                    </FormLine>
                </Details>

            </PaymentInfo>
            <OrderTotal/>

        </PaymentForm>
    )
};

export default Payment;
