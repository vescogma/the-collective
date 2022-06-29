import { Express } from 'express';
import Fuse from 'fuse.js';
import db from '../assets/outfits.json';
import { Cosmetic } from '@the-collective/model';

const fuse = new Fuse<Cosmetic>(db, {
  keys: [
    {
      name: 'name',
      weight: 0.7,
    },
    {
      name: 'description',
      weight: 0.3,
    },
  ],
  includeScore: true,
  threshold: 0.3,
});

export function addSearchRoutes(app: Express) {
  app.get('/api/search', (req, res) => {
    const pattern = (req.query as { q?: string }).q;
    const results = fuse.search(pattern, { limit: 20 });
    res.send(results);
  });
}
