import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./type-defs.js";

import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";
import * as Sentry from "@sentry/node";
import dotenv from "dotenv";

async function main() {
  dotenv.config();
  const SENTRY_DSN = process.env["SENTRY_DSN"];
  if (SENTRY_DSN) {
    Sentry.init({ dsn: SENTRY_DSN });
  }
  const port = 8080;
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
