import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { CardImg, CardText, CardTitle } from 'reactstrap';

export const ProductCase = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 270px;
  max-height: 400px;
  margin: 30px 0;
`;

export const ProductImage = styled.img`
  height: 200px;
  object-fit: contain;
  padding-top: 10px;
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
  width: 90%;
  border-radius: 0 !important;
  margin-top: 20px !important;
  text-transform: inherit !important;
  background: var(--color-main) !important;
  color: var(--color-white) !important;
  font-size: 16px !important;
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
  font-family: Poppins, sans-serif;
  font-weight: bold;
`;

export const StyledCardText = styled(CardText)`
  color: var(--color-main);
  font-family: Poppins, sans-serif;
  font-weight: bold;
<<<<<<< HEAD
width: 90%;
border-radius: 0 !important;
margin-top: 20px !important;
text-transform: inherit !important;
background: var(--color-main) !important;
font-size: 16px !important;
line-height: 24px !important;
outline: none !important;

=======
>>>>>>> c975613e7b83ea5b9c9eacfc57589c85f603b0a9
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

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
