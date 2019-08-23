export default interface ExampleQuery {
  id: string;
  label: string;
  query: string;
}

export function getExampleQueries (): Array<ExampleQuery> {
  return [
    {
      id: 'single-post',
      label: 'Single Post',
      query: unindent(`
        query SinglePost {
          post(id: 1) {
            title
            body
          }
        }
      `)
    },
    {
      id: 'list-posts',
      label: 'List Posts',
      query: unindent(`
        query ListPosts {
          posts(options: { paginate: { limit: 5 } }) {
            data {
              id
              title
              body
            }
          }
        }
      `)
    },
    {
      id: 'single-comment',
      label: 'Single Comment',
      query: unindent(`
        query SingleComment {
          comment(id: 1) {
            name
            email
            body
          }
        }
      `)
    },
    {
      id: 'list-comments',
      label: 'List Comments',
      query: unindent(`
        query ListComments {
          comments(options: { paginate: { limit: 5 } }) {
            data {
              id
              name
              email
              body
            }
          }
        }
      `)
    },
    {
      id: 'single-album',
      label: 'Single Album',
      query: unindent(`
        query SingleAlbum {
          album(id: 1) {
            id
          }
        }
      `)
    },
    {
      id: 'list-albums',
      label: 'List Albums',
      query: unindent(`
        query ListAlbums {
          albums(options: { paginate: { limit: 5 } }) {
            data {
              id
            }
          }
        }
      `)
    },
    {
      id: 'single-photo',
      label: 'Single Photo',
      query: unindent(`
        query SinglePhoto {
          photo(id: 1) {
            id
          }
        }
      `)
    },
    {
      id: 'list-photos',
      label: 'List Photos',
      query: unindent(`
        query ListPhotos {
          photos(options: { paginate: { limit: 5 } }) {
            data {
              id
            }
          }
        }
      `)
    },
    {
      id: 'single-todo',
      label: 'Single Todo',
      query: unindent(`
        query SingleTodo {
          todo(id: 1) {
            id
          }
        }
      `)
    },
    {
      id: 'list-todos',
      label: 'List Todos',
      query: unindent(`
        query ListTodos {
          todos(options: { paginate: { limit: 5 } }) {
            data {
              id
            }
          }
        }
      `)
    },
    {
      id: 'single-user',
      label: 'Single User',
      query: unindent(`
        query SingleUser {
          user(id: 1) {
            id
          }
        }
      `)
    },
    {
      id: 'list-users',
      label: 'List Users',
      query: unindent(`
        query ListUsers {
          users(options: { paginate: { limit: 5 } }) {
            data {
              id
            }
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
