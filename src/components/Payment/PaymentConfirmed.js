import React from "react";
import {ListItem, OrderedList, PaymentForm, PaymentHeading, PaymentInfo} from "./PaymentElements";
import {LinkTag} from "../Header/HeaderElements";

const PaymentConfirmed = () => {
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
                        <LinkTag to={'/paymentConfirmed'}>
                            <ListItem>Confirmation</ListItem>
                        </LinkTag>
                    </OrderedList>
                    <PaymentHeading>Payment Confirmation</PaymentHeading>
                </PaymentInfo>
                <h3>Payment Successful! Your Order is on its way! 🥳</h3>
            </PaymentForm>
        </div>
    )
};

export default PaymentConfirmed;