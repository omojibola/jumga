import styled from 'styled-components';
import { Col } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Column = styled(Col)`
  background: var(--color-subMain);
  height: 900px;

  position: relative;

  @media screen and (max-width: 575px) {
    display: none !important;
  }
`;

export const BackgroundImage = styled.div`
  width: 80%;
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

export const FormContainer = styled(Formik)`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  margin-top: 50px;
`;

export const StyledForm = styled(Form)``;
export const FormInput = styled(Field)`
  width: 340px;
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

export const FormButton = styled.button`
  width: 340px;
  height: 35px;
  background: var(--color-main);
  margin: 10px 0;
  box-shadow: -2px 7px 20px 0px rgba(204, 204, 204, 1);
  border: none;
  color: var(--color-white);

  &:focus {
    outline: none;
  }
`;
