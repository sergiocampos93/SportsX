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
  TextArea,
  PhonesContent,
} from './styles';

import api from '../../services/api';

import InputError from '../../components/InputError';

const CustomerRegister: React.FC = () => {
  type FormData = {
    name: string;
    isLegalEntity: boolean | number;
    cpf_cnpj: string;
    cep: string;
    email: string;
    classification: string;
    phones: string;
  };
  const { register, handleSubmit, errors } = useForm<FormData>();
  return (
    <Container>
      <PageTitle>Cadastrar cliente</PageTitle>
      <Form
        onSubmit={handleSubmit(async ({ phones, isLegalEntity, ...rest }) => {
          const formatedData = {
            isLegalEntity: isLegalEntity == 1,
            phones: phones
              .split(/(\r\n|\r|\n)/)
              .filter(phone => phone.length >= 8),
            ...rest,
          };
          console.log(formatedData);
          await api.post('customers', formatedData);
        })}
      >
        <RadioContent>
          <label htmlFor="pf">
            <input
              type="radio"
              id="pf"
              name="isLegalEntity"
              value={0}
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
              value={1}
              ref={register()}
            />
            Pessoa Jurídica
          </label>
        </RadioContent>
        <Input placeholder="CPF / CNPJ" name="cpf_cnpj" ref={register()} />
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
        <PhonesContent>
          <label htmlFor="phones">Telefones:</label>
          <TextArea
            placeholder="Separe cada um dos telefones por linhas."
            name="phones"
            id="phones"
            rows={5}
            cols={12}
            ref={register()}
          />
        </PhonesContent>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default CustomerRegister;
