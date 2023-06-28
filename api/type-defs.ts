import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";
import { typeDefs as albumTypeDefs } from "./models/album.js";
import { typeDefs as commentTypeDefs } from "./models/comment.js";
import { typeDefs as pageTypeDefs } from "./models/page.js";
import { typeDefs as photoTypeDefs } from "./models/photo.js";
import { typeDefs as postTypeDefs } from "./models/post.js";
import { typeDefs as todoTypeDefs } from "./models/todo.js";
import { typeDefs as userTypeDefs } from "./models/user.js";

/**
 *
 */
const baseTypeDefs = gql`
  type Query {
    _: Int
  }

  type Mutation {
    _: Int
  }
`;

/**
 *
 */
export const typeDefs: Array<DocumentNode> = [
  baseTypeDefs,
  albumTypeDefs,
  commentTypeDefs,
  pageTypeDefs,
  photoTypeDefs,
  postTypeDefs,
  todoTypeDefs,
  userTypeDefs,
];
