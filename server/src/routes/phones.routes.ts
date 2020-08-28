import { Router } from 'express';

const phonesRoutes = Router();

phonesRoutes.get('/', async (request, response) => {
  response.json({ message: 'phones' });
});

export default phonesRoutes;
