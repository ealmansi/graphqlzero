export default interface ExampleQuery {
  id: string;
  label: string;
  type: 'query' | 'mutation';
  query: string;
  variables?: {
    [key: string]: any;
  };
}

export function getExampleQueries (): Array<ExampleQuery> {
  return [
    {
      id: 'get-post',
      label: 'Get a post',
      type: 'query',
      query: unindent(`
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
      label: 'Get a user',
      type: 'query',
      query: unindent(`
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
      label: 'Get user posts',
      type: 'query',
      query: unindent(`
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
      label: 'Get posts',
      type: 'query',
      query: unindent(`
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
      label: 'Get comments',
      type: 'query',
      query: unindent(`
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
      label: 'Create a post',
      type: 'mutation',
      query: unindent(`
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
      label: 'Update a post',
      type: 'mutation',
      query: unindent(`
        mutation updatePost($id: ID!, $input: UpdatePostInput!) {
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
      label: 'Delete a post',
      type: 'mutation',
      query: unindent(`
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
