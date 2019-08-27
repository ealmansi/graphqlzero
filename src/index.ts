import { buildApolloServer } from './server';

const server = buildApolloServer();

const handler = server.createHandler({
  path: '/api'
});

export default handler;
