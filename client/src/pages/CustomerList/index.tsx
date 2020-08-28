import React, { useState, useEffect } from 'react';

import api from '../../services/api';

interface Customer {
  id: string;
  name: string;
  isLegalEntity: boolean;
  cpf_cnpj: string;
  cep: string;
  email: string;
  classification: string;
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
    const newList = customers.filter(customer => customer.id !== id);
    setCustomers(newList);
  }
  return (
    <>
      <h1>Lista de cliente</h1>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>CPF / CNPJ</th>
            <th>Nome / Razão social</th>
            <th>CEP</th>
            <th>E-mail</th>
            <th>Classificação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>
                {customer.isLegalEntity ? 'Pessoa Jurídica' : 'Pessoa Física'}
              </td>
              <td>{customer.cpf_cnpj}</td>
              <td>{customer.name}</td>
              <td>{customer.cep}</td>
              <td>{customer.email}</td>
              <td>{customer.classification}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemodeCustomer(customer.id)}
                >
                  Apagar
                </button>
                <button type="button">Alterar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomerList;
