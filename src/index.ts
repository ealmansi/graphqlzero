import { buildServer } from './server';

const server = buildServer();

const handler = server.createHandler({
  path: '/api'
});

export default handler;
