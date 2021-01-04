import React from "react";
import {useSelector} from "react-redux";
import ButtonName from "../../components/Button/ButtonName";
import {getBasketTotal} from "../../store/reducer";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import {Container, CheckoutItems, CheckoutHeader, OrderSummary, SubTotal, SummaryDetails, SummaryHead} from "./CheckoutElements";

const Checkout = () => {
    const basket = useSelector(state => state.cart.basket);

    return (
        <Container>
            <CheckoutItems>
                <CheckoutHeader>Your Shopping Basket</CheckoutHeader>
                <CheckoutProduct />
            </CheckoutItems>
            <OrderSummary>
               <SummaryHead>Order Summary</SummaryHead>
                <SummaryDetails>
                    <SubTotal>Subtotal</SubTotal>
                    <SubTotal>NGN {getBasketTotal(basket)}</SubTotal>
                </SummaryDetails>
                <SummaryDetails>
                    <SubTotal>Shipping</SubTotal>
                    <SubTotal>NGN {getBasketTotal(basket) * 0.1}</SubTotal>
                </SummaryDetails>
                <SummaryDetails>
                    <SubTotal>Total</SubTotal>
                    <SubTotal>NGN {getBasketTotal(basket) + (getBasketTotal(basket) * 0.1)}</SubTotal>
                </SummaryDetails>
                <ButtonName>Check Out</ButtonName>
            </OrderSummary>
        </Container>
    )
};

export default Checkout;