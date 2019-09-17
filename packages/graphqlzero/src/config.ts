import { Config } from 'apollo-server-core';
import { resolvers } from './resolvers';
import { typeDefs } from './type-defs';

/**
 * 
 */
export const config: Config = {
  typeDefs,
  resolvers,
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'light',
    }
  }
};
