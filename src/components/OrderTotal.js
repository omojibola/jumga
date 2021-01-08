import React from "react";
import {SubTotal, SummaryDetails, SummaryHead, OrderSummary} from "../containers/Checkout/CheckoutElements";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../store/reducers/shopReducer";
import ButtonName from "./Button/ButtonName";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";


const OrderTotal = ({checkout}) => {
    const basket = useSelector((state) => state.cart.basket);
    const history = useHistory();

    const click = () => {
        history.push('/payment')
    };
    return (
        <>
            <OrderSummary>
                <SummaryHead>Order Summary</SummaryHead>
                <SummaryDetails>
                    <SubTotal>Subtotal</SubTotal>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <SubTotal>
                                    {value}
                                </SubTotal>
                            </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"N"}
                    />
                </SummaryDetails>
                <SummaryDetails>
                    <SubTotal>Shipping</SubTotal>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <SubTotal>
                                    {value}
                                </SubTotal>
                            </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket) * 0.1}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"N"}
                    />
                </SummaryDetails>
                <SummaryDetails>
                    <SubTotal>Total</SubTotal>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <SubTotal>
                                    {value}
                                </SubTotal>
                            </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket) + getBasketTotal(basket) * 0.1}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"N"}
                    />
                </SummaryDetails>
                {checkout &&
                <ButtonName onClick={click}>Check Out</ButtonName>
                }
            </OrderSummary>
        </>
    )

};

export default OrderTotal;