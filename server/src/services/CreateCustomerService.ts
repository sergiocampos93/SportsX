import { getCustomRepository } from 'typeorm';
import Customer from '../models/Customers';
import CustomerRepository from '../repositories/CustomersRepository';

interface Request{
  name: string;
  cep: string;
  email: string;
  classification: string;
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
