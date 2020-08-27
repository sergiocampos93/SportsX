import { EntityRepository, Repository } from 'typeorm';
import Customer from '../models/Customers';

@EntityRepository(Customer)
class CustomersRepository extends Repository<Customer> {

}

export default CustomersRepository;
