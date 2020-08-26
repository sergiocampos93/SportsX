import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Welcome to SportsX API!' }));

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
