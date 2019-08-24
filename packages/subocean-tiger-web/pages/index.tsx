import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks';
import ApolloClient, { gql, ApolloError } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import Prism from 'prismjs';
import React, { useEffect, useState } from 'react';
import ExampleQuery, { getExampleQueries } from '../lib/example-query';

const Index = withApolloClient(
  function Index () {
    return (
      <div>
        <TopBar />
        <Header />
        <Main />
        <Footer />
        <style jsx global>{`
          * {
            font-family: 'Raleway', sans-serif;
          }
          html, body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
);

function withApolloClient (Component: React.ComponentType) {
  const GRAPHQL_SERVER_URL = process.env.GRAPHQL_SERVER_URL;
  if (GRAPHQL_SERVER_URL === undefined) {
    throw new Error('Missing environment variable GRAPHQL_SERVER_URL.');
  }
  const client = new ApolloClient({
    uri: GRAPHQL_SERVER_URL,
    fetch
  });
	return class extends React.Component {
    render () {
      return (
        <ApolloProvider client={client}>
          <Component { ...this.props }/>
        </ApolloProvider>
      );
    }
	}
}

function TopBar () {
  return (
    <nav>
      <a href="#" className="brand">SuboceanTiger</a>
      <ul>
        <li>
          <a href="#examples">Examples</a>
        </li>
        <li>
          <a href="#get-started">Get Started</a>
        </li>
        <li>
          <a href="https://github.com/ealmansi" target="_blank" rel="noopener">Github</a>
        </li>
      </ul>
      <style jsx>{`
        nav {
          padding: 20px 10px;
          border-bottom: 1px solid lightgray;
          overflow: auto;
        }
        a {
          padding: 20px 10px;
          text-decoration: none;
          color: black;
        }
        a:hover {
          text-decoration: underline;
        }
        @media screen and (max-width: 480px) {
          nav .brand {
            display: none;
          }
        }
        nav ul {
          display: inline-block;
          float: right;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        nav ul li {
          display: inline-block;
        }
      `}</style>
    </nav>
  )
}

function Header () {
  return (
    <header>
      <h1>SuboceanTiger</h1>
      <p>Fake Online GraphQL API for Testing and Prototyping</p>
      <p>Powered by JSONPlaceholder</p>
      <style jsx>{`
        header {
          padding: 50px;
          border-bottom: 1px solid lightgray;
          text-align: center;
        }
        header h1 {
          font-size: 64px;
        }
        @media screen and (max-width: 768px) {
          header h1 {
            font-size: 8vw;
          }
        }
      `}</style>
    </header> 
  )
}

function Main () {
  return (
    <main>
      <div>
        <Intro />
        <Examples />
        <GetStarted />
        <Resources />
      </div>
      <style jsx>{`
        main {
          padding: 30px;
          border-bottom: 1px solid lightgray;
        }
        main div {
          max-width: 768px;
          margin: 0 auto;
        }
      `}</style>
    </main> 
  )
}

function Intro () {
  return (
    <section id="intro">
      <h1>Intro</h1>
      <p>
        SuboceanTiger is a free online GraphQL API that you can use whenever you need some fake data.
      </p>
      <p>
        It's great for tutorials, testing new libraries, sharing code examples, ...
      </p>
      <style jsx>{`
        section {
          margin-bottom: 20px;
          padding-top: 20px;
        }
      `}</style>
    </section>
  )
}

function Examples () {
  const [activeQuery, setActiveQuery] = useState('get-post');
  const exampleQueries = getExampleQueries();
  const exampleQuery = exampleQueries.find(({ id }) => id === activeQuery) || exampleQueries[0];
  function buildClassName (id: string): string {
    return id === activeQuery ? 'active' : '';
  }
  function buildOnClickHandler (id: string): ((event: React.MouseEvent) => void) {
    return (event) => {
      setActiveQuery(id);
    }
  }
  return (
    <section id="examples" className="examples">
      <h1>Examples</h1>
      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
      <div className="columns">
        <div className="column left-column">
          <ul>
            {
              exampleQueries.map((exampleQuery) => {
                const { id, label } = exampleQuery;
                return (
                  <li key={id} className={buildClassName(id)}>
                    <a href="#example-query" onClick={buildOnClickHandler(id)}>{label}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="column right-column">
          <section id="example-query">
            <h1>Query or Mutation</h1>
            <QueryDisplay exampleQuery={exampleQuery}/>
          </section>
          <section>
            <h1>Response</h1>
            <ResponseDisplay exampleQuery={exampleQuery}/>
          </section>
        </div>
      </div>
      <style jsx>{`
        .examples {
          margin-bottom: 20px;
          padding-top: 20px;
        }
        .examples .columns {
          margin-top: 50px;
          padding: 0 20px 20px 20px;
          border: 1px solid lightgray;
        }
        .examples .columns .column {
          vertical-align: top;
          margin: 0;
          padding: 0;
          display: inline-block;
        }
        @media screen and (max-width: 667px) {
          .examples .columns .column {
            display: block;
          }
        }
        .examples .columns .left-column {
          width: 30%;
        }
        @media screen and (max-width: 667px) {
          .examples .columns .left-column {
            width: 100%;
          }
        }
        .examples .columns .left-column ul {
          margin: 0;
          padding: 30px 0 10px 0;
          list-style: none;
        }
        .examples .columns .left-column ul li a {
          width: calc(100% - 20px);
          padding: 10px;
          display: inline-block;
          color: black;
          text-decoration: none;
          border-bottom: 1px solid lightgray;
        }
        .examples .columns .left-column ul li.active a {
          background: lightgray;
        }
        .examples .columns .left-column ul li:hover a {
          background: lightgray;
        }
        .examples .columns .right-column {
          width: 70%;
        }
        @media screen and (max-width: 667px) {
          .examples .columns .right-column {
            width: 100%;
          }
        }
        .examples .columns .right-column section {
          padding-top: 20px;
          padding-left: 20px;
        }
        @media screen and (max-width: 667px) {
          .examples .columns .right-column section {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  )
}

function QueryDisplay (props: { exampleQuery: ExampleQuery }) {
  useEffect(() => Prism.highlightAll());
  const { exampleQuery } = props;
  const { query } = exampleQuery;
  return (
    <pre>
      <code className="language-graphql">{query}</code>
      <style jsx>{`
        pre {
          min-height: 100px;
          max-height: 300px;
        }
      `}</style>
    </pre>
  )
}

function ResponseDisplay (props: { exampleQuery: ExampleQuery }) {
  useEffect(() => Prism.highlightAll());
  const { exampleQuery } = props;
  const { type, query } = exampleQuery;
  let loading: boolean | undefined, error: ApolloError | undefined, data: any;
  if (type === 'query') {
    const queryResult = useQuery(gql`${query}`);
    ({ loading, error, data } = queryResult);
  }
  else {
    const [_, mutationResult] = useMutation(gql`${query}`);
    ({ loading, error, data } = mutationResult);
  }
  let code: JSX.Element | null = null;
  if (error !== undefined) {
    code = <code className="language-textfile">Oops. Something went wrong.</code>;
  }
  else {
    if (loading) {
      code = <code className="language-textfile">Loading ...</code>;
    }
    else {
      const omitTypename = (key: string, value: any) => {
        if (key === '__typename') {
          return undefined;
        }
        return value;
      }
      const dataDisplay = JSON.stringify(data, omitTypename, 2);
      code = <code className="language-json">{dataDisplay}</code>;
    }
  }
  return (
    <pre>
      {code}      
      <style jsx>{`
        pre {
          min-height: 100px;
          max-height: 300px;
        }
      `}</style>
    </pre>
  )
}

function GetStarted () {
  return (
    <section id="get-started">
      <h1>Get Started</h1>
      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
      <style jsx>{`
        section {
          margin-bottom: 20px;
          padding-top: 20px;
        }
      `}</style>
    </section>
  )
}

function Resources () {
  return (
    <section id="resources">
      <h1>Resources</h1>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <style jsx>{`
        section {
          margin-bottom: 20px;
          padding-top: 20px;
        }
      `}</style>
    </section>
  )
}

function Footer () {
  return (
    <footer>
      <p>
        Source code and CHANGELOG available on GitHub.
      </p>
      <style jsx>{`
        footer {
          padding: 50px;
          text-align: center;
        }
      `}</style>
    </footer>
  )
}

export default Index;
