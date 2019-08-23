import { ApolloServer, gql } from 'apollo-server-lambda';
import { resolvers as albumResolvers, typeDefs as albumTypeDefs } from './models/album';
import { resolvers as commentResolvers, typeDefs as commentTypeDefs } from './models/comment';
import { resolvers as pageResolvers, typeDefs as pageTypeDefs } from './models/page';
import { resolvers as photoResolvers, typeDefs as photoTypeDefs } from './models/photo';
import { resolvers as postResolvers, typeDefs as postTypeDefs } from './models/post';
import { resolvers as todoResolvers, typeDefs as todoTypeDefs } from './models/todo';
import { resolvers as userResolvers, typeDefs as userTypeDefs } from './models/user';

export const handler = (): (event: any, context: any, callback: any) => void => {
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
  ]

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
  }

  const server = new ApolloServer({ typeDefs, resolvers });
  return server.createHandler({
    cors: {
      origin: '*',
      credentials: true,
    },
  });
}
