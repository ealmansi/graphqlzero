import { ApolloServer } from 'apollo-server-micro';
import { config } from './config';

/**
 * 
 */
export class GraphQlZeroServer extends ApolloServer {
  constructor () {
    super(config);
  }
}
