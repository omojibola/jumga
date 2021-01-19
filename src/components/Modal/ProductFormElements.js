import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';

export const Button = styled.button`
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

export const FormContainer = styled(Formik)`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  margin-top: 50px;
  width: 80%;
`;

export const FormHeaderText = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family:poppins,
  sans-seriff @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
export const StyledForm = styled.form``;

export const FormInput = styled.input`
  width: 100%;
  height: 35px;
  border: 0.2px solid #ccc;
  background: var(--color-white);
  margin-bottom: 20px;
  text-indent: 5px;
  box-shadow: -2px 7px 20px 0px rgba(204, 204, 204, 1);

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 35px;
  border: 0.2px solid #ccc;
  background: var(--color-white);
  margin-bottom: 20px;
  text-indent: 5px;
  box-shadow: -2px 7px 20px 0px rgba(204, 204, 204, 1);

  &:focus {
    outline: none;
  }
`;
export const Label = styled.label`
  color: var(--color-black);
  font-size: 14px;
  font-family: poppins;
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
  width: 100%;
  height: 35px;

  &:hover {
    color: var(--color-main);
    background: white;
    border: 1px solid var(--color-main);
  }

  &:focus {
    outline: none;
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
