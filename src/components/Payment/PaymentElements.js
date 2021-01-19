import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PaymentForm = styled.div`
width: 80%;
margin: 20px auto;
display: flex;
align-items: center;

@media (max-width: 780px) {
flex-direction: column;
}
`;

export const PaymentInfo = styled.div`
width: 70%;

@media (max-width: 780px) {
width: 100%;
}
`;

export const OrderedList = styled.ol`
display: flex;
width: 50%;
justify-content: space-between;
margin: 50px 15px;

`;

export const ListItem = styled.li`
font-size: 14px;
line-height: 21px;
color: ${({ color }) => (color ? 'var(--color-main)' : 'var(--color-black)')};

@media (max-width: 780px) {
display: ${({ color }) => (color ? 'inherit' : 'none')};
}
  width: 80%;
  margin: 20px auto;
  display: flex;
  align-items: center;
`;

export const PaymentHeading = styled.h1`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--color-black);
`;

export const PayParagraph = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${({ color }) =>
    color ? 'var(--color-main)' : 'rgba(0, 0, 0, 0.54)'};
  display: inline-block;
  margin: 10px 0;
`;

export const Details = styled.div``;

export const FormContainer = styled.div`
  margin: 50px 0;
`;

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 50px;
`;

export const FormLine = styled.div`
display: flex;
justify-content: space-between;
width: ${({ width }) => (width ? '70%' : '90%')};
margin: 60px 0;

@media (max-width: 780px) {
width: 100%;
}
`;

export const FormItem = styled.div`
  position: relative;
  width: 100%;
`;

export const FormLabel = styled.label`
  position: absolute;
  top: -25px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.8);
  opacity: 80%;
`;

export const FormInput = styled.input`
  background: var(--color-white);
  border: 1px solid rgba(196, 196, 196, 0.5);
  padding: 5px 10px;
  height: 40px;
  width: ${({ width }) => (width ? '70%' : '90%')};
  &:focus {
    outline: none;
  }
`;

export const FormSelect = styled.input`
  width: 80%;
  height: 40px;
  border: 1px solid rgba(196, 196, 196, 0.5);
  background: var(--color-white);
  padding: 5px 2px;
  text-indent: 5px;
  &:focus {
    outline: none;
  }
`;

export const PaymentText = styled.small`
  font-size: 14px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
`;

export const InputBox = styled.input`
  margin-right: 8px;
`;

export const ReturnLink = styled(Link)`
  color: var(--color-main);
  font-size: 14px;
  line-height: 21px;
  &:hover {
    color: var(--color-main);
  }
`;

export const SubmitButton = styled.button`
  background: var(--color-main);
  font-family: poppins, sans-serif;
  font-size: 14px;
  color: #ffffff;
  border-radius: 0 !important;
  text-transform: inherit;
  font-weight: 300;
  padding: 10px;
  border: none;
  transition: 0.2s ease-in;

  &:hover {
    color: var(--color-main);
    background: white;
    border: 1px solid var(--color-main);
  }

  &:focus {
    outline: none;
  }
`;
