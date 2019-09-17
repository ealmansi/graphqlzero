import { config } from 'dotenv';
import { GraphQlZeroServer } from 'graphqlzero/dist/micro';
import microCors from 'micro-cors';
import path from 'path';

config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

const server = new GraphQlZeroServer();

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
