/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import Express from 'express';
import Cors from 'cors';
import { addSearchRoutes } from './app/search';
import { addPinRoutes } from './app/pin';

const app = Express();
const cors = Cors();

app.use(cors);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

addSearchRoutes(app);
addPinRoutes(app);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
