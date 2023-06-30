import { IResolvers } from "@graphql-tools/utils";
import { resolvers as albumResolvers } from "./models/album";
import { resolvers as commentResolvers } from "./models/comment";
import { resolvers as pageResolvers } from "./models/page";
import { resolvers as photoResolvers } from "./models/photo";
import { resolvers as postResolvers } from "./models/post";
import { resolvers as todoResolvers } from "./models/todo";
import { resolvers as userResolvers } from "./models/user";

/**
 *
 */
export const resolvers: IResolvers = {
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
