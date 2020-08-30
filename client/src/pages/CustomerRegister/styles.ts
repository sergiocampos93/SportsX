import styled from 'styled-components';

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
`;

export const RadioContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const ClassificationContent = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Select = styled.select`
  padding: 8px;
`;
