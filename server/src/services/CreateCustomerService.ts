import { getCustomRepository, getRepository } from 'typeorm';
import Customer from '../models/Customer';
import Phone from '../models/Phone';
import CustomerRepository from '../repositories/CustomersRepository';

interface Request{
  name: string;
  isLegalEntity: boolean;
  cpf_cnpj: string;
  cep: string;
  email: string;
  classification: 'ativo' | 'inativo' | 'preferencial';
  phones: string[];
}

class CreateCustomerService {
  public async execute({
    name, isLegalEntity, cpf_cnpj, cep, email, classification, phones,
  }:Request): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomerRepository);
    const phoneRepository = getRepository(Phone);
    const customer = customerRepository.create({
      name, isLegalEntity, cpf_cnpj, cep, email, classification,
    });

    await customerRepository.save(customer);

    phones.forEach(async (phone) => {
      const phoneNumber = phoneRepository.create({
        phone_number: phone,
        customer,
      });
      await phoneRepository.save(phoneNumber);
    });

    return customer;
  }
}

export default CreateCustomerService;
