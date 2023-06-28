import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./type-defs.js";

import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";

async function main() {
  const port = 3000;
  const app = express();
  const apolloServer = new ApolloServer<{}>({
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
  });
  await apolloServer.start();
  app.use(express.static(path.join(process.cwd(), "out")));
  app.use("/api", cors(), bodyParser.json(), expressMiddleware(apolloServer));
  await new Promise<void>((resolve) => {
    app.listen(port, () => {
      resolve();
    });
  });
  console.log(`Listening on port ${port}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
