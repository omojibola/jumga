import styled from "styled-components";
import {Button} from "@material-ui/core";

export const ProductCase = styled.div`
display: flex;
flex-direction: column;
background: #FFFFFF;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
max-width: 300px;
min-width: 200px;
margin: 30px 0;
`;

export const ProductImage = styled.img`
height: 200px;
object-fit: contain;

`;

export const ProductDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
`;

export const ProductName = styled.p`
font-family: Poppins, sans-serif;
font-style: normal;
font-weight:  ${({weight}) => (weight ? 'bold' : 'normal')};
font-size: 16px;
line-height: 24px;
color: #000000;

`;

export const ProductButton = styled(Button)`
width: 90%;
border-radius: 0 !important;
margin-top: 20px !important;
text-transform: inherit !important;
background: var(--color-main) !important;
color: var(--color-white) !important;
font-size: 16px !important;
line-height: 24px !important;
outline: none !important;
 
`;


