import dotenv from 'dotenv';

async function main () {
  dotenv.config();
  const { buildGraphqlServer } = await import('subocean-tiger-graphql-server');
  const server = buildGraphqlServer();
  const serverInfo = await server.listen();
  console.log(`🚀  Server ready at ${serverInfo.url}`);
}

if (require.main === module) {
  main();
}
