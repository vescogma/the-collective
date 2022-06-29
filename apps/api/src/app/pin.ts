import { Express } from 'express';

const db: { [key: string]: boolean } = {};

export function addPinRoutes(app: Express) {
  app.get('/api/pinned', (req, res) => {
    res.send(db);
  });
  app.post('/api/pin/:costumeId', (req, res) => {
    db[req.params.costumeId] = true;
    res.send(db);
  });
  app.post('/api/unpin/:costumeId', (req, res) => {
    db[req.params.costumeId] = false;
    res.send(db);
  });
}
