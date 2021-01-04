import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export const Column = styled(Col)`
  background: var(--color-subMain);
  position: relative;

  @media screen and (max-width: 575px) {
    display: none !important;
  }
`;

export const BackgroundImage = styled.div`
  width: 60%;
  height: 400px;
  margin: 200px auto 0 auto;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 144px;
`;

export const Heading = styled.h3`
  color: var(--color-main);
  font-weight: 600;
`;

export const Heading2 = styled.h5`
  color: rgba(0, 0, 0, 0.54);
`;

export const FormContainer = styled(Formik)`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  margin-top: 50px;
  width: 340px;
`;

export const FormContainer2 = styled.div``;

export const StyledForm = styled(Form)``;
export const FormWrap = styled.div`
  width: 100%;
`;
export const FormInput = styled(Field)`
  width: 70%;
  height: 35px;
  border: 0.2px solid #ccc;
  background: var(--color-white);
  margin: 10px 0;
  text-indent: 5px;
  box-shadow: -2px 7px 20px 0px rgba(204, 204, 204, 1);

  &:focus {
    outline: none;
  }
`;

export const FormSelect = styled.select`
  width: 70%;
  height: 35px;
  border: 0.2px solid #ccc;
  background: var(--color-white);
  margin: 10px 0;
  text-indent: 5px;
  box-shadow: -2px 7px 20px 0px rgba(204, 204, 204, 1);

  &:focus {
    outline: none;
  }
`;

export const Checkbox = styled.input`
  flex-direction: row;
`;
export const SmallText = styled.p`
  color: #000;
  font-weight: 12px;
  flex-direction: row;
`;

export const FormButton = styled.button`
  width: 70%;
  height: 35px;
  background: ${({ white }) =>
    white ? `var(--color-white)` : `var(--color-main)`};
  margin: 10px 0;
  box-shadow: -2px 7px 20px 0px rgba(204, 204, 204, 1);
  border: ${({ white }) =>
    white ? `1px solid var(--color-main)` : `1px solid var(--color-main)`};
  color: ${({ white }) => (white ? `var(--color-main)` : `var(--color-white)`)};

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid var(--color-main);
    background: ${({ white }) => (white ? `var(--color-main)` : `transparent`)};
    color: ${({ white }) =>
      white ? `var(--color-white)` : `var(--color-main)`};
    transition: 0.3s ease-in;
  }
`;

export const FormButtonLink = styled.div`
  width: 70%;
  height: 35px;
  background: var(--color-main);
  margin: 10px 0;
  box-shadow: -2px 7px 20px 0px rgba(204, 204, 204, 1);
  border: none;
  color: var(--color-white);

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid var(--color-main);
    background: transparent;
    color: var(--color-main);
    transition: 0.3s ease-in;
  }
`;

export const WrapperTwo = styled.div`
  display: flex;
  width: 70%;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const TextWrapper2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  background: ${({ grey }) => (grey ? `#F2F2F2` : `var(--color-main)`)};
  width: 70%;
  height: ${({ long }) => (long ? `70px` : `35px`)};
  border-radius: ${({ curved }) => (curved ? `10px` : `0`)};
  margin: 0 auto;
  cursor: pointer;
  border: none;

  &:focus {
    outline: none;
  }
`;
export const Text = styled.div`
  flex-direction:row
  text-align: left;
  color: ${({ black }) => (black ? `#000` : `#c4c4c4`)};
  font-size: 14px;
  

`;

export const Texttwo = styled(Link)`
  flex-direction: row;
  align-items: end;
  color: ${({ main }) => (main ? `var(--color-main)` : `#fff`)};
  font-size: 14px;
  text-align: left;
  text-decoration: none;
  margin-left: 1px;
  cursor: pointer;

  &:hover {
    color: ${({ main }) => (main ? `var(--color-main)` : `#fff`)};
  }
`;

export const ErrorWrapper = styled.div`
  color: red;
  font-size: 12px;
  margin-top: -7px;
  margin-bottom: 13px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
