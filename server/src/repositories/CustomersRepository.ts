import {
  EntityRepository, Repository, Like, getRepository,
} from 'typeorm';
import Customer from '../models/Customer';
import Phone from '../models/Phone';

type CustomerJoinedPhones = {
  id: string;

  name: string;

  isLegalEntity: boolean;

  cpf_cnpj: string;

  cep: string;

  email: string;

  classification: 'ativo' | 'inativo' | 'preferencial';

  phones: Phone[];
}

@EntityRepository(Customer)
class CustomersRepository extends Repository<Customer> {
  public async findByName(name: string): Promise<Customer[]> {
    const findCustomers = await this.find({
      where: { name: Like(`%${name}%`) },
    });
    return findCustomers;
  }

  public async findJoinedPhones(): Promise<CustomerJoinedPhones[]> {
    const phonesRepository = getRepository(Phone);
    const phones = await phonesRepository.find();
    const customers = await this.find();
    const customersJoinPhones = customers.map((customer) => (
      { ...customer, phones: phones.filter((phone) => phone.customer_id === customer.id) }
    ));

    return customersJoinPhones;
  }
}

export default CustomersRepository;
