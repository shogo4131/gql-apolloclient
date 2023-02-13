import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache,
});
