import React from 'react';
import { useForm } from 'react-hook-form';

import { Container, Form, Input, Button } from './styles';

import api from '../../services/api';

const CustomerRegister: React.FC = () => {
  type FormData = {
    name: string;
    cpf_cnpj: string;
    cep: string;
    email: string;
    classification: string;
  };
  const { register, handleSubmit, errors } = useForm<FormData>();
  return (
    <Container>
      <h1>Cadastrar cliente</h1>
      <Form
        onSubmit={handleSubmit(async formData => {
          await api.post('customers', formData);
        })}
      >
        <Input
          name="name"
          placeholder="Nome / Razão Social"
          ref={register({
            required: 'Campo obrigatório',
            pattern: {
              value: /\D{4,}\s+\D{4,}/,
              message: 'Nome inválido.',
            },
          })}
        />
        <Input
          name="cep"
          placeholder="CEP"
          ref={register({
            required: 'Campo obrigatório',
            pattern: {
              value: /\d{2}-\d{3}-\d{3}/,
              message: 'CEP inválido',
            },
          })}
        />
        <Input
          name="email"
          placeholder="E-mail"
          ref={register({
            required: 'Campo obrigatório',
            pattern: {
              value: /\w+@\w+\.[\w].+/,
              message: 'E-mail inválido',
            },
          })}
        />
        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default CustomerRegister;
