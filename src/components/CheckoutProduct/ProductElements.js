import styled from "styled-components";

export const ProductHeading = styled.h1`
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 54px;
color: var(--color-black);

@media (max-width: 400px) {
  font-size: 24px;
}
`;

export const Products = styled.div`
width: 80%;
margin-bottom: 5%;

@media (max-width: 780px) {
  width: 100%;
}
`;

export const ProductTop = styled.div`
display: flex;
border-bottom: 1px solid #E5E5E5;
margin-bottom: 30px;
`;

export const ProductHead = styled.h6`
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 24px;
color: var(--color-black);
margin: 30px 0;
`;

export const ProductInfo = styled.p`
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: var(--color-black);
flex: .2;

`;

export const ProductItem = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 30px;
border-bottom: 1px solid #E5E5E5;
margin-top: 20px;
`;

export const ProductImg = styled.img`
width: 100px;
height: 120px;
`;
