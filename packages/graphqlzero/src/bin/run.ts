import { GraphQlZeroServer } from '../standalone';

export interface RunOptions {
  port: number;
}

export async function run (options: RunOptions) {
  const { port } = options;
  const server = new GraphQlZeroServer();
  const { url } = await server.listen({ port });
  console.log(`🚀 GraphQLZero: server ready at ${url}.`);
}
