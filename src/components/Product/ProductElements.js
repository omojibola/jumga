import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { CardImg, CardText, CardTitle } from 'reactstrap';

export const ProductCase = styled.div`
<<<<<<< HEAD
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  min-width: 200px;
  max-height: 400px;
=======
display: flex;
flex-direction: column;
background: #FFFFFF;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
max-width: 300px;
min-width: 200px;
margin: 30px 0;
>>>>>>> 8c6b08900ea177194d0ce01a2c190823baa1aab3
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
  font-weight: ${({ weight }) => (weight ? 'bold' : 'normal')};
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const ProductButton = styled(Button)`
<<<<<<< HEAD
  width: 90%;
  border-radius: 0 !important;
  margin-top: 20px !important;
  text-transform: inherit !important;
`;

export const ImageTop = styled(CardImg)`
  width: 100% !important;
  height: 200px !important;
  object-fit: cover;
`;

export const StyledCardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  border: 1px solid red;
`;

export const StyledCardTitle = styled(CardTitle)`
  color: var(--color-main);
  font-size: 18px;
  font-family: poppins;
  font-weight: bold;
`;

export const StyledCardText = styled(CardText)`
  font-size: 15px;
  color: var(--color-main);
  font-family: poppins;
  font-weight: bold;
=======
width: 90%;
border-radius: 0 !important;
margin-top: 20px !important;
text-transform: inherit !important;
background: var(--color-main) !important;
color: var(--color-white) !important;
font-size: 16px !important;
line-height: 24px !important;
outline: none !important;
 
>>>>>>> 8c6b08900ea177194d0ce01a2c190823baa1aab3
`;
export const Grid = styled.div`
  display: grid;
  gridtemplatecolumns: repeat(3, 1fr);
  gridgap: 1rem;

  @media screen and (max-width: 500px) {
    display: block;
    margin-bottom: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 0 17px 10px 17px;
  display: flex;
  justify-content: space-between;
`;

export const ProductButtonTwo = styled.button`
  width: 50px;
`;
