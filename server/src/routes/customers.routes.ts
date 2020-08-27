import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../repositories/CustomersRepository';
import CreateCustomerService from '../services/CreateCustomerService';

const customersRouter = Router();

customersRouter.get('/', async (request, response) => {
  const customersRepository = getCustomRepository(CustomersRepository);
  const customers = await customersRepository.find();

  response.json(customers);
});

customersRouter.post('/', async (request, response) => {
  try {
    const {
      name, cep, email, classification, phone,
    } = request.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({
      name, cep, email, classification, phone,
    });
    return response.json(customer);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default customersRouter;
