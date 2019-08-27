import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import React from 'react';

export function withApolloClient<P>(Component: React.ComponentType<P>): React.ComponentType<P> {
  const client = new ApolloClient({
    uri: '/api',
    fetch
  });
  return class extends React.Component<P> {
    render() {
      return (<ApolloProvider client={client}>
        <Component {...this.props} />
      </ApolloProvider>);
    }
  };
}
