export default interface ExampleOperation {
  id: string;
  label: string;
  operation: 'query' | 'mutation';
  source: string;
  variables: {
    [key: string]: any;
  };
}

export function getExampleOperations (): Array<ExampleOperation> {
  return [
    {
      id: 'get-post',
      label: 'Get a Post',
      operation: 'query',
      source: `
        query {
          post(id: 1) {
            id
            title
            body
          }
        }
      `,
      variables: {
      }
    },
    {
      id: 'get-user',
      label: 'Get a User',
      operation: 'query',
      source: `
        query {
          user(id: 1) {
            id
            username
            email
            address {
              geo {
                lat
                lng
              }
            }
          }
        }
      `,
      variables: {
      }
    },
    {
      id: 'get-user-posts',
      label: 'Get User\'s Posts',
      operation: 'query',
      source: `
        query {
          user(id: 1) {
            posts {
              data {
                id
                title
              }
            }
          }
        }
      `,
      variables: {
      }
    },
    {
      id: 'get-photos-album',
      label: 'Get a Photo\'s Album',
      operation: 'query',
      source: `
        query (
          $id: ID!
        ) {
          photo(id: $id) {
            album {
              id
              title
              user {
                id
              }
            }
          }
        }
      `,
      variables: {
        id: 5
      }
    },
    {
      id: 'get-posts',
      label: 'Get All Posts',
      operation: 'query',
      source: `
        query (
          $options: PageQueryOptions
        ) {
          posts(options: $options) {
            data {
              id
              title
            }
            meta {
              totalCount
            }
          }
        }
      `,
      variables: {
        options: {
          paginate: {
            page: 1,
            limit: 5
          }
        }
      }
    },
    {
      id: 'create-post',
      label: 'Create a Post',
      operation: 'mutation',
      source: `
        mutation (
          $input: CreatePostInput!
        ) {
          createPost(input: $input) {
            id
            title
            body
          }
        }
      `,
      variables: {
        input: {
          title: 'A Very Captivating Post Title',
          body: 'Some interesting content.'
        }
      }
    },
    {
      id: 'update-post',
      label: 'Update a Post',
      operation: 'mutation',
      source: `
        mutation (
          $id: ID!,
          $input: UpdatePostInput!
        ) {
          updatePost(id: $id, input: $input) {
            id
            body
          }
        }
      `,
      variables: {
        id: 1,
        input: {
          body: 'Some updated content.'
        }
      }
    },
    {
      id: 'delete-post',
      label: 'Delete a Post',
      operation: 'mutation',
      source: `
        mutation (
          $id: ID!
        ) {
          deletePost(id: $id)
        }
      `,
      variables: {
        id: 101
      }
    }
  ]
}

export function getDefaultExampleOperation () {
  return getExampleOperations()[0];
}
