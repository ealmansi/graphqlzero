import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";

export const handler = startServerAndCreateLambdaHandler(
  new ApolloServer<{}>({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          "editor.theme": "light",
        },
      }) as unknown as ApolloServerPlugin<{}>,
    ],
  }),
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);
