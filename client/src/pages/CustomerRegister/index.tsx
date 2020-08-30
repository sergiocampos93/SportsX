import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Container,
  PageTitle,
  Form,
  Input,
  Button,
  RadioContent,
  ClassificationContent,
  Select,
} from './styles';

import api from '../../services/api';

import InputError from '../../components/InputError';

const CustomerRegister: React.FC = () => {
  type FormData = {
    name: string;
    isLegalEntity: boolean;
    cpf_cnpj: string;
    cep: string;
    email: string;
    classification: string;
    phone: number;
  };
  const { register, handleSubmit, errors } = useForm<FormData>();
  return (
    <Container>
      <PageTitle>Cadastrar cliente</PageTitle>
      <Form
        onSubmit={handleSubmit(async formData => {
          console.log(formData);
          // await api.post('customers', formData);
        })}
      >
        <RadioContent>
          <label htmlFor="pf">
            <input
              type="radio"
              id="pf"
              name="isLegalEntity"
              value="false"
              ref={register()}
              defaultChecked
            />
            Pessoa Física
          </label>
          <label htmlFor="pj">
            <input
              type="radio"
              id="pj"
              name="isLegalEntity"
              value="true"
              ref={register()}
            />
            Pessoa Jurídica
          </label>
        </RadioContent>

        <Input
          name="name"
          placeholder="Nome / Razão Social"
          ref={register({
            required: 'Campo obrigatório',
            maxLength: {
              value: 100,
              message: 'Deve ter no máximo 100 caracteres',
            },
            pattern: {
              value: /\D{4,}\s+\D{4,}/,
              message: 'Nome inválido.',
            },
          })}
        />
        {errors.name && <InputError>{errors.name.message}</InputError>}
        <Input
          name="cep"
          type="number"
          placeholder="CEP"
          ref={register({
            required: 'Campo obrigatório',
            minLength: {
              value: 8,
              message: 'CEP Inválido',
            },
            maxLength: {
              value: 8,
              message: 'CEP Inválido',
            },
          })}
        />
        {errors.cep && <InputError>{errors.cep.message}</InputError>}
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          ref={register({
            required: 'Campo obrigatório',
            pattern: {
              value: /\w{4,}@\w{3,}\.[\w].+/,
              message: 'E-mail inválido',
            },
          })}
        />
        {errors.email && <InputError>{errors.email.message}</InputError>}
        <ClassificationContent htmlFor="classification">
          Classificação:
          <Select
            id="classification"
            name="classification"
            ref={register({ required: 'Campo obrigatório' })}
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="preferencial">Preferencial</option>
          </Select>
        </ClassificationContent>

        <Input
          type="tel"
          name="phone"
          placeholder="Telefone"
          ref={register()}
        />
        {errors.phone && <InputError>{errors.phone.message}</InputError>}

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default CustomerRegister;
