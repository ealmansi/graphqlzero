import microCors from 'micro-cors';
import { buildApolloServer } from './server';

const server = buildApolloServer();

const handler = server.createHandler({
  path: '/api'
});

const cors = microCors();

export default cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  return handler(req, res);
});
