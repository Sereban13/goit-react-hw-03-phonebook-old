import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Input = styled(Field)`
  background-color: aqua;
  border: 2px solid red;
`;

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: 20px;
`;
