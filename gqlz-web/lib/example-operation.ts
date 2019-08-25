export default interface ExampleOperation {
  id: string;
  label: string;
  operation: 'query' | 'mutation';
  source: string;
  variables?: {
    [key: string]: any;
  };
}

export function getExampleOperations (): Array<ExampleOperation> {
  return [
    {
      id: 'get-post',
      label: 'Get a Post',
      operation: 'query',
      source: unindent(`
        query getPost($id: ID!) {
          post(id: $id) {
            id
            title
          }
        }
      `),
      variables: {
        id: 1
      }
    },
    {
      id: 'get-user',
      label: 'Get a User',
      operation: 'query',
      source: unindent(`
        query getUser($id: ID!) {
          user(id: $id) {
            id
            name
          }
        }
      `),
      variables: {
        id: 1
      }
    },
    {
      id: 'get-user-posts',
      label: 'Get User Posts',
      operation: 'query',
      source: unindent(`
        query getUserPosts(
          $id: ID!,
          $options: PageQueryOptions
        ) {
          user(id: $id) {
            posts(options: $options) {
              data {
                id
                title
              }
            }
          }
        }
      `),
      variables: {
        id: 1,
        options: {
          paginate: {
            page: 1,
            limit: 4
          }
        }
      }
    },
    {
      id: 'get-posts',
      label: 'Get Posts',
      operation: 'query',
      source: unindent(`
        query getPosts($options: PageQueryOptions) {
          posts(options: $options) {
            data {
              id
              title
            }
          }
        }
      `),
      variables: {
        options: {
          paginate: {
            page: 1,
            limit: 4
          }
        }
      }
    },
    {
      id: 'get-comments',
      label: 'Get Comments',
      operation: 'query',
      source: unindent(`
        query getComments($options: PageQueryOptions) {
          comments(options: $options) {
            data {
              id
              body
            }
          }
        }
      `),
      variables: {
        options: {
          paginate: {
            page: 1,
            limit: 4
          }
        }
      }
    },
    {
      id: 'create-post',
      label: 'Create a Post',
      operation: 'mutation',
      source: unindent(`
        mutation createPost($input: CreatePostInput!) {
          createPost(input: $input) {
            id
            title
            body
          }
        }
      `),
      variables: {
        input: {
          title: 'some title',
          body: 'some body'
        }
      }
    },
    {
      id: 'update-post',
      label: 'Update a Post',
      operation: 'mutation',
      source: unindent(`
        mutation updatePost(
          $id: ID!,
          $input: UpdatePostInput!
        ) {
          updatePost(id: $id, input: $input) {
            id
            body
          }
        }
      `),
      variables: {
        id: 1,
        input: {
          body: 'some other body'
        }
      }
    },
    {
      id: 'delete-post',
      label: 'Delete a Post',
      operation: 'mutation',
      source: unindent(`
        mutation deletePost($id: ID!) {
          deletePost(id: $id)
        }
      `),
      variables: {
        id: 1
      }
    }
  ]
}

export function getDefaultExampleOperation () {
  return 'get-post';
}

function unindent (text: string) {
  const lines = text.split('\n').slice(1, -1);
  let spaces = text.length;
  for (const line of lines) {
    let i = 0;
    for (; i < line.length && line[i] === ' '; ++i) {
    }
    spaces = Math.min(spaces, i);
  }
  return lines.map(line => line.substr(spaces)).join('\n');
}
