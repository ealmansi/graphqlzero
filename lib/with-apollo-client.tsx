import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';

export function withApolloClient<P>(Component: React.ComponentType<P>): React.ComponentType<P> {
  const client = new ApolloClient({
    uri: '/api',
    cache: new InMemoryCache(),
  });
  return class extends React.Component<P> {
    displayName = Component.displayName;
    render() {
      return (
        <ApolloProvider client={client}>
          <Component {...this.props} />
        </ApolloProvider>
      );
    }
  };
}
