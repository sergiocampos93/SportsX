import { getCustomRepository } from 'typeorm';
import Customer from '../models/Customer';
import CustomerRepository from '../repositories/CustomersRepository';

interface Request{
  name: string;
  cep: string;
  email: string;
  classification: 'ativo' | 'inativo' | 'preferencial';
  phone: string;
}

class CreateCustomerService {
  public async execute({
    name, cep, email, classification, phone,
  }:Request): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomerRepository);

    const customer = customerRepository.create({
      name, cep, email, classification, phone,
    });

    await customerRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;