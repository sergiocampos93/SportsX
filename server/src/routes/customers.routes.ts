import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../repositories/CustomersRepository';
import CreateCustomerService from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';

const customersRouter = Router();

customersRouter.get('/', async (request, response) => {
  const customersRepository = getCustomRepository(CustomersRepository);
  const customers = await customersRepository.findJoinedPhones();

  response.json(customers);
});

customersRouter.get('/:name', async (request, response) => {
  const customersRepository = getCustomRepository(CustomersRepository);
  const customers = await customersRepository.findByName(request.params.name);

  response.json(customers);
});

customersRouter.post('/', async (request, response) => {
  try {
    const {
      name, isLegalEntity, cpf_cnpj, cep, email, classification, phones,
    } = request.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({
      name, isLegalEntity, cpf_cnpj, cep, email, classification, phones,
    });
    return response.json(customer);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

customersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteCustomer = new DeleteCustomerService();
  await deleteCustomer.execute(id);

  return response.status(204).send({});
});

export default customersRouter;
