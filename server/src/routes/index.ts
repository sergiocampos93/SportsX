import { Router } from 'express';
import customersRouter from './customers.routes';
import phonesRouter from './phones.routes';

const routes = Router();

routes.use('/customers', customersRouter);
routes.use('/phones', phonesRouter);

export default routes;
