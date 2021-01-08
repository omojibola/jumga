import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 80%;
margin: 0 auto;
padding: 50px 0;
//align-items: center;
`;

export const CheckoutItems = styled.div`
flex: 1;
`;

export const CheckoutHeader = styled.h3`
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 32px;
color: var(--color-black);
margin: 30px 0;
`;

export const OrderSummary = styled.div`
background: rgba(229, 229, 229, 0.2);
padding: 3%;
color: var(--color-black);
display: flex;
flex-direction: column;
height: fit-content;
width: 30%;

`;

export const SummaryHead = styled.h5`
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
margin: 10px 0;
text-align: center;
`;

export const SummaryDetails = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 0;
width: 100%;
`;

export const SubTotal = styled.p`
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;

`;

