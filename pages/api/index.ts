import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { resolvers } from '../../lib/resolvers';
import { typeDefs } from '../../lib/type-defs';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({
    settings: {
      'editor.theme': 'light',
    },
  })],
});

const graphqlHandler = startServerAndCreateNextHandler(server);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await new Promise(function (resolve, reject) {
    cors(req, res, (err?: unknown) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(undefined);
    });
  })
  await graphqlHandler(req, res);
}
