import { IResolvers } from "@graphql-tools/utils";
import { resolvers as albumResolvers } from "./models/album.js";
import { resolvers as commentResolvers } from "./models/comment.js";
import { resolvers as pageResolvers } from "./models/page.js";
import { resolvers as photoResolvers } from "./models/photo.js";
import { resolvers as postResolvers } from "./models/post.js";
import { resolvers as todoResolvers } from "./models/todo.js";
import { resolvers as userResolvers } from "./models/user.js";

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
