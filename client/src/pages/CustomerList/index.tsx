import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Ul,
  EditIcon,
  TrashIcon,
  PageTitle,
} from './styles';

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

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  useEffect(() => {
    async function loadCustomers(): Promise<void> {
      const response = await api.get('/customers');
      setCustomers(response.data);
    }

    loadCustomers();
  }, []);
  async function handleRemodeCustomer(id: string): Promise<void> {
    await api.delete(`/customers/${id}`);
    alert('Cliente apagado com sucesso!');
    const newList = customers.filter(customer => customer.id !== id);
    setCustomers(newList);
  }
  return (
    <Container>
      <PageTitle>Clientes</PageTitle>
      <Table>
        <Thead>
          <Tr>
            <Th>Tipo</Th>
            <Th>CPF / CNPJ</Th>
            <Th>Nome / Razão social</Th>
            <Th>CEP</Th>
            <Th>E-mail</Th>
            <Th>Classificação</Th>
            <Th>Telefones</Th>
            <Th>Deletar / Alterar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map(customer => (
            <Tr key={customer.id}>
              <Td>
                {customer.isLegalEntity ? 'Pessoa Jurídica' : 'Pessoa Física'}
              </Td>
              <Td>{customer.cpf_cnpj}</Td>
              <Td>{customer.name}</Td>
              <Td>{customer.cep}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.classification}</Td>
              <Td>
                <Ul>
                  {customer.phones.map(phone =>
                    phone.customer_id === customer.id ? (
                      <li>{phone.phone_number}</li>
                    ) : null,
                  )}
                </Ul>
              </Td>
              <Td>
                <TrashIcon
                  size={24}
                  onClick={() => handleRemodeCustomer(customer.id)}
                />
                <EditIcon size={24} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default CustomerList;
