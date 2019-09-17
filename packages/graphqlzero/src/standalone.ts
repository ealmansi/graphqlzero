import { ApolloServer } from 'apollo-server';
import { config } from './config';

/**
 * 
 */
export class GraphQlZeroServer extends ApolloServer {
  constructor () {
    super(config);
  }
}
