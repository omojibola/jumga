import React from "react";
import {
    Details,
    FormContainer, FormInput, FormItem, FormLabel, FormLine, PaymentInfo,
    ListItem,
    OrderedList, PaymentForm,
    PaymentHeading,
    PayParagraph, FormSelect,
    ReturnLink, StyledForm
} from "./PaymentElements";
import {LinkTag} from "../Header/HeaderElements";
import ButtonName from "../Button/ButtonName";
import OrderTotal from "../OrderTotal";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {getBasketTotal} from "../../store/reducers/shopReducer";

const PaymentTwo = () => {
    const history = useHistory();
    const basket = useSelector((state) => state.cart.basket);
    return (
        <div>
            <PaymentForm>
                <PaymentInfo>
                    <OrderedList>
                        <LinkTag to={'/payment'}>
                            <ListItem>Shipping</ListItem>
                        </LinkTag>
                        <LinkTag to={'/paymentTwo'}>
                            <ListItem color>Payment</ListItem>
                        </LinkTag>
                        <LinkTag to={'/paymentTwo'}>
                            <ListItem>Confirmation</ListItem>
                        </LinkTag>
                    </OrderedList>
                    <PaymentHeading>Payment Details</PaymentHeading>
                    <PayParagraph>If you already have an account, <ReturnLink to={'/login'}>sign in here</ReturnLink> </PayParagraph>

                    <Details>
                        <FormContainer
                            initialValues={{
                                name: '',
                                cardNumber: '',
                                expiryDate: '',
                                year: '',
                                code: ''
                            }}
                        >
                            <StyledForm>
                                <FormLine width>
                                    <FormItem>
                                        <FormLabel htmlFor={'name'}>Card Holder's name</FormLabel>
                                        <FormInput type={'text'} name={'name'} />
                                    </FormItem>
                                </FormLine>
                                <FormLine width>
                                    <FormItem>
                                        <FormLabel htmlFor={'cardNumber'}>Card Number</FormLabel>
                                        <FormInput type={'text'} name={'cardNumber'} />
                                    </FormItem>
                                </FormLine>

                                <FormLine width>
                                    <FormItem>
                                        <FormLabel htmlFor={'expiryDate'}>Expiry Date</FormLabel>
                                        <FormSelect component={"select"} name={"month"}>
                                            <option value="" disabled>Please Select an option</option>
                                            <option value="Jan">January</option>
                                            <option value="Feb">February</option>
                                            <option value="Mar">March</option>
                                            <option value="Apr">April</option>
                                            <option value="May">May</option>
                                            <option value="Jun">June</option>
                                            <option value="Jul">July</option>
                                            <option value="Aug">August</option>
                                            <option value="Sep">September</option>
                                            <option value="Oct">October</option>
                                            <option value="Nov">November</option>
                                            <option value="Dec">December</option>
                                        </FormSelect>

                                    </FormItem>
                                    <FormItem>
                                        <FormLabel htmlFor={'year'}>Year</FormLabel>
                                        <FormSelect component={"select"} name={"year"}>
                                            <option value="" disabled>Please Select an option</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>
                                        </FormSelect>
                                    </FormItem>
                                    <FormItem>
                                        <FormLabel htmlFor={'code'}>Security Code</FormLabel>
                                        <FormInput width type={'text'} name={'code'} placeholder={'CVV'} />
                                    </FormItem>
                                </FormLine>
                            </StyledForm>
                        </FormContainer>
                        <FormLine width>
                            <ReturnLink to={'/checkout'}>Back to Cart</ReturnLink>
                            <ButtonName>Pay {getBasketTotal(basket) + getBasketTotal(basket) * 0.1}</ButtonName>
                        </FormLine>
                    </Details>

                </PaymentInfo>
                <OrderTotal/>

            </PaymentForm>
        </div>
    )
};

export default PaymentTwo;