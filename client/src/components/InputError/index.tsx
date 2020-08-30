import React from 'react';

import { FiAlertTriangle } from 'react-icons/fi';

import { Message, MessageBox } from './styles';

const InputError: React.FC = ({ children }) => (
  <MessageBox>
    <FiAlertTriangle size={24} color="#c7ba00" />
    <Message>{children}</Message>
  </MessageBox>
);

export default InputError;
