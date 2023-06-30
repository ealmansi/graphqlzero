import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";
import { typeDefs as albumTypeDefs } from "./models/album";
import { typeDefs as commentTypeDefs } from "./models/comment";
import { typeDefs as pageTypeDefs } from "./models/page";
import { typeDefs as photoTypeDefs } from "./models/photo";
import { typeDefs as postTypeDefs } from "./models/post";
import { typeDefs as todoTypeDefs } from "./models/todo";
import { typeDefs as userTypeDefs } from "./models/user";

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
