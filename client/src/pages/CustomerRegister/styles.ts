import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const PageTitle = styled.h2`
  margin-top: 75px;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  width: 300px;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  margin-top: 15px;
  padding: 10px;
`;

export const Button = styled.button`
  outline: 0;
  cursor: pointer;
  background: #0f79af;
  color: #fff;
  border: 0;
  border-radius: 8px;
  margin-top: 25px;
  padding: 10px;
  font-size: 18px;

  &:hover {
    background: ${shade(0.2, '#0f79af')};
  }
`;

export const RadioContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const ClassificationContent = styled.label`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 10px;
`;

export const Select = styled.select`
  padding: 8px;
  outline: 0;
`;

export const TextArea = styled.textarea`
  outline: 0;
`;
export const PhonesContent = styled.div`
  margin-top: 15px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const BackToMainPage = styled.div`
  cursor: pointer;
  background: #0f171e;
  display: flex;
  align-items: center;
  position: fixed;
  top: 15px;
  left: 0;
  font-size: 40px;
`;
