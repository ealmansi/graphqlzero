import { ApolloServer } from 'apollo-server-lambda';
import { resolvers, typeDefs } from '../graphql';

const server = new ApolloServer({ typeDefs, resolvers });
export const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
