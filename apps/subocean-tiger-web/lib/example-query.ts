export default interface ExampleQuery {
  id: string;
  label: string;
  type: 'query' | 'mutation';
  query: string;
}

export function getExampleQueries (): Array<ExampleQuery> {
  return [
    {
      id: 'get-post',
      label: 'Get a post',
      type: 'query',
      query: unindent(`
        query getPost {
          post(id: 1) {
            id
          }
        }
      `)
    },
    {
      id: 'get-user',
      label: 'Get a user',
      type: 'query',
      query: unindent(`
        query getUser {
          user(id: 1) {
            id
          }
        }
      `)
    },
    {
      id: 'get-user-todos',
      label: 'Get user posts',
      type: 'query',
      query: unindent(`
        query getUserPosts {
          user(id: 1) {
            posts(options: { paginate: { limit: 5 } }) {
              data {
                id
              }
            }
          }
        }
      `)
    },
    {
      id: 'get-posts',
      label: 'Get posts',
      type: 'query',
      query: unindent(`
        query getPosts {
          posts(options: { paginate: { limit: 5 } }) {
            data {
              id
            }
          }
        }
      `)
    },
    {
      id: 'get-comments',
      label: 'Get comments',
      type: 'query',
      query: unindent(`
        query getComments {
    
        }
      `)
    },
    {
      id: 'create-post',
      label: 'Create a post',
      type: 'mutation',
      query: unindent(`
        mutation createPost {
          createPost(input: { title: "some title", body: "some body" }) {
            id
          }
        }
      `)
    },
    {
      id: 'update-post',
      label: 'Update a post',
      type: 'mutation',
      query: unindent(`
        mutation updatePost {
          updatePost(id: 1) {
            id
          }
        }
      `)
    },
    {
      id: 'delete-post',
      label: 'Delete a post',
      type: 'mutation',
      query: unindent(`
        mutation deletePost {
          deletePost(id: 1) {
            id
          }
        }
      `)
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
