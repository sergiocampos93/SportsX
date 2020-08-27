import { EntityRepository, Repository } from 'typeorm';
import Customer from '../models/Customer';

@EntityRepository(Customer)
class CustomersRepository extends Repository<Customer> {
  public async findByName(name: string): Promise<Customer[]> {
    const findCustomers = await this.find({
      where: { name },
    });
    return findCustomers;
  }
}

export default CustomersRepository;
