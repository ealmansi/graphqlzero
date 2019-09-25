#!/usr/bin/env node
import { GraphQlZeroServer } from '../standalone';

async function main () {
  const server = new GraphQlZeroServer();
  const { url } = await server.listen();
  console.log(`🚀 GraphQLZero: server ready at ${url}.`);
}

if (require.main === module) {
  main();
}
