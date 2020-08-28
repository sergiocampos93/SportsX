import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../repositories/CustomersRepository';

class DeleteCustomerService {
  public async execute(id: string): Promise<void> {
    const customerRepository = getCustomRepository(CustomerRepository);
    const customer = await customerRepository.findOne(id);

    if (!customer) { throw new Error('There is no customer with this ID'); }
    await customerRepository.remove(customer);
  }
}

export default DeleteCustomerService;
