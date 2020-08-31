import React, { useState } from 'react';
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

interface Phone {
  id: string;
  customer_id: string;
  phone_number: string;
}

interface Customer {
  id: string;
  name: string;
  isLegalEntity: boolean;
  cpf_cnpj: string;
  cep: string;
  email: string;
  classification: string;
  phones: Phone[];
}

const CustomerRegister: React.FC<{ location: { state: Customer } }> = ({
  location: { state },
}) => {
  const isNewRegister = state === undefined;
  type FormData = {
    id?: string;
    name: string;
    isLegalEntity: boolean | number;
    cpf_cnpj: string;
    cep: string;
    email: string;
    classification: string;
    phones: string;
  };
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [entity, setEntity] = useState(false);
  return (
    <Container>
      <PageTitle>
        {isNewRegister ? 'Cadastrar Cliente' : 'Atualizar Cliente'}
      </PageTitle>
      <Form
        onSubmit={handleSubmit(async ({ phones, isLegalEntity, ...rest }) => {
          let formatedData = {
            isLegalEntity: entity,
            phones: phones
              .split(/(\r\n|\r|\n)/)
              .filter(phone => phone.length >= 8),
            ...rest,
          };
          if (isNewRegister) {
            await api.post('customers', formatedData);
            alert('Cliente cadastrado com sucesso!');
          } else {
            formatedData = {
              id: state.id,
              ...formatedData,
            };
            await api.post('customers/update', formatedData);
            alert('Dados do cliente atualizados com sucesso!');
          }
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
              onClick={() => setEntity(false)}
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
              onClick={() => setEntity(true)}
            />
            Pessoa Jurídica
          </label>
        </RadioContent>
        <Input
          defaultValue={state?.cpf_cnpj}
          placeholder={
            entity ? 'CNPJ (somente números)' : 'CPF (somente números)'
          }
          name="cpf_cnpj"
          ref={register({
            required: entity ? 'CNPJ obrigatório.' : 'CPF obrigatório.',
            pattern: {
              value: entity ? /\d{14}/ : /\d{11}/,
              message: entity ? 'CNPJ inválido.' : 'CPF inválido.',
            },
          })}
        />
        {errors.cpf_cnpj && <InputError>{errors.cpf_cnpj.message}</InputError>}
        <Input
          defaultValue={state?.name}
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
          defaultValue={state?.cep}
          name="cep"
          type="number"
          placeholder="CEP (somente números)"
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
          defaultValue={state?.email}
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
            defaultValue={state?.phones.map(phone => phone.phone_number)}
            placeholder="Separe cada um dos telefones por linhas."
            name="phones"
            id="phones"
            rows={5}
            cols={12}
            ref={register()}
          />
        </PhonesContent>

        <Button type="submit">
          {isNewRegister ? 'Cadastrar' : 'Atualizar'}
        </Button>
      </Form>
    </Container>
  );
};

export default CustomerRegister;
