import { ApolloServer, gql } from 'apollo-server-micro';
import { resolvers as albumResolvers, typeDefs as albumTypeDefs } from './models/album';
import { resolvers as commentResolvers, typeDefs as commentTypeDefs } from './models/comment';
import { resolvers as pageResolvers, typeDefs as pageTypeDefs } from './models/page';
import { resolvers as photoResolvers, typeDefs as photoTypeDefs } from './models/photo';
import { resolvers as postResolvers, typeDefs as postTypeDefs } from './models/post';
import { resolvers as todoResolvers, typeDefs as todoTypeDefs } from './models/todo';
import { resolvers as userResolvers, typeDefs as userTypeDefs } from './models/user';

export function buildServer () {
  const baseTypeDefs = gql`
    type Query {
      _: Int
    }

    type Mutation {
      _: Int
    }
  `;

  const typeDefs = [
    baseTypeDefs,
    albumTypeDefs,
    commentTypeDefs,
    pageTypeDefs,
    photoTypeDefs,
    postTypeDefs,
    todoTypeDefs,
    userTypeDefs,
  ];

  const resolvers = {
    Query: {
      ...albumResolvers.Query,
      ...commentResolvers.Query,
      ...pageResolvers.Query,
      ...photoResolvers.Query,
      ...postResolvers.Query,
      ...todoResolvers.Query,
      ...userResolvers.Query,
    },
    Mutation: {
      ...albumResolvers.Mutation,
      ...commentResolvers.Mutation,
      ...pageResolvers.Mutation,
      ...photoResolvers.Mutation,
      ...postResolvers.Mutation,
      ...todoResolvers.Mutation,
      ...userResolvers.Mutation,
    },
    Album: albumResolvers.Album,
    Comment: commentResolvers.Comment,
    Photo: photoResolvers.Photo,
    Post: postResolvers.Post,
    Todo: todoResolvers.Todo,
    User: userResolvers.User,
  };

  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: {
      settings: {
        'editor.theme': 'light',
      }
    }
  });
}
