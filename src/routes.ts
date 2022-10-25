import { Router } from 'express';


const routes = Router();

routes.get('/', (request, response) => {
  response
    .status(200)
    .send({
      api: 'testing-api',
      version: '1.0.0',
      author: 'Matheus Araujo',
      email: 'matheus.araujo@kukac.com.br',
      github: '/moohbr',
    });
});

export { routes };
