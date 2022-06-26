/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import Express from 'express';
import { addSearchRoutes } from './app/search';

const app = Express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});
addSearchRoutes(app)

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
