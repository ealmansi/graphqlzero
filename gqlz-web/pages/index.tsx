import { ApolloProvider, useMutation, useQuery } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import Prism from "prismjs";
import React, { useEffect, useState } from 'react';
import '../css/font.css';
import ExampleOperation, { getDefaultExampleOperation, getExampleOperations } from '../lib/example-operation';

const lightColor = 'rgba(245,149,214,1)'; // rgba-primary-1
const lightColorTransparent = 'rgba(245,149,214,0.2)'; // rgba-primary-1
const darkColor = 'rgba(126,  0, 85,1)'; // rgba-primary-4

const Index = withApolloClient(
  function Index () {
    return (
      <div>
        <TopBar />
        <Header />
        <Main />
        <Footer />
        <style jsx global>{`
          html, body {
            margin: 0;
            padding: 0;
            font-family: 'Raleway', sans-serif;
          }
          .rgba-primary-0 { color: rgba(235,  3,160,1) }	/* Main Primary color */
          .rgba-primary-1 { color: rgba(245,149,214,1) }
          .rgba-primary-2 { color: rgba(238, 68,183,1) }
          .rgba-primary-3 { color: rgba(199,  0,134,1) }
          .rgba-primary-4 { color: rgba(126,  0, 85,1) }

          .rgba-complement-0 { color: rgba(182,250,  3,1) }	/* Main Complement color */
          .rgba-complement-1 { color: rgba(225,253,154,1) }
          .rgba-complement-2 { color: rgba(201,251, 72,1) }
          .rgba-complement-3 { color: rgba(175,242,  0,1) }
          .rgba-complement-4 { color: rgba(113,156,  0,1) }
        `}</style>
      </div>
    );
  }
);

function TopBar () {
  return (
    <div>
      <nav>
        <a href="#" className="brand rgba-primary-4">GraphQLZero</a>
        <ul>
          <li>
            <a href="#examples" className="rgba-primary-4">Examples</a>
          </li>
          <li>
            <a href="#get-started" className="rgba-primary-4">Get Started</a>
          </li>
          <li>
            <a href="https://github.com/ealmansi/gqlz" className="rgba-primary-4" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        div {
          border-bottom: 1px solid ${lightColor};
          overflow: auto;
          padding: 20px 10px;
        }
        nav {
          max-width: 768px;
          margin: auto;
        }
        a {
          padding: 20px 10px;
          text-decoration: none;
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
    </div>
  )
}

function Header () {
  return (
    <header>
      <h1>GraphQL<span className="rgba-primary-2">Zero</span></h1>
      <h2>Fake Online GraphQL API for Testing and Prototyping</h2>
      <p>Zero-Config, No Registration, Compatible with React, Angular, Vue, and more </p>
      <p>Powered by <a href="https://jsonplaceholder.typicode.com" className="rgba-primary-4" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a> and <a href="https://www.apollographql.com" className="rgba-primary-4" target="_blank" rel="noopener noreferrer">Apollo</a></p>
      <style jsx>{`
        header {
          padding: 70px 50px;
          border-bottom: 1px solid ${lightColor};
          text-align: center;
        }
        header h1 {
          font-size: 64px;
        }
        @media screen and (max-width: 768px) {
          header h1 {
            font-size: 7vw;
          }
        }
        @media screen and (max-width: 480px) {
          header h1 {
            font-size: 28px;
          }
        }
        @media screen and (max-width: 768px) {
          header h2 {
            font-size: 3.5vw;
          }
        }
        @media screen and (max-width: 480px) {
          header h2 {
            font-size: 18px;
          }
        }
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
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
          padding: 30px 30px 100px 30px;
          border-bottom: 1px solid ${lightColor};
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
        GraphQLZero is a free online GraphQL API that you can use whenever you need some fake data. <br />
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
  const [activeOperationId, setActiveOperationId] = useState(getDefaultExampleOperation());
  let activeOperation = getExampleOperations().find((exampleOperation) => {
    return exampleOperation.id === activeOperationId;
  });
  return (
    <section id="examples" className="examples">
      <h1>Examples</h1>
      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
      <div id="panel" className="panel">
        <div className="top-row">
          <div className="left-column">
            <OperationDisplay exampleOperation={activeOperation}/>
            <VariablesDisplay exampleOperation={activeOperation}/>
          </div>
          <div className="right-column">
            <OperationSelect
              activeOperationId={activeOperationId}
              setActiveOperationId={setActiveOperationId}
            />
          </div>
        </div>
        <ResultDisplay exampleOperation={activeOperation}/>
      </div>
      <style jsx>{`
        .examples {
          margin-bottom: 20px;
          padding-top: 20px;
        }
        .examples .panel {
          margin-top: 50px;
          padding: 20px;
          border: 1px solid ${lightColor};
          -webkit-border-radius: 0.3em;
          -moz-border-radius: 0.3em;
          border-radius: 0.3em;
        }
        .examples .panel .top-row .left-column {
          width: calc(100% - 250px);
          display: inline-block;
          vertical-align: top;
        }
        @media screen and (max-width: 667px) {
          .examples .panel .top-row .left-column {
            width: 100%;
            display: block;
          }
        }
        .examples .panel .top-row .right-column {
          width: 250px;
          display: inline-block;
          vertical-align: top;
        }
        @media screen and (max-width: 667px) {
          .examples .panel .top-row .right-column {
            width: 100%;
            display: block;
          }
        }
      `}</style>
    </section>
  )
}

function OperationDisplay (props: { exampleOperation: ExampleOperation; }) {
  const { exampleOperation } = props;
  const { operation, source } = exampleOperation;
  const heading = operation === 'query' ? 'Query' : 'Mutation';
  return (
    <section>
      <h1>{heading}</h1>
      <pre>
        <PrismCode
          code={source}
          language="graphql"
          plugins={["line-numbers"]}
        />
      </pre>
    </section>
  )
}

function VariablesDisplay (props: { exampleOperation: ExampleOperation; }) {
  const { exampleOperation } = props;
  const { variables } = exampleOperation;
  const json = JSON.stringify(variables, null, 2);
  return (
    <section>
      <h1>Variables</h1>
      <pre>
        <PrismCode
          code={json}
          language="json"
          plugins={["line-numbers"]}
        />
      </pre>
    </section>
  )
}

function OperationSelect (props: {
  activeOperationId: string,
  setActiveOperationId: (string) => void;
}) {
  const { activeOperationId, setActiveOperationId } = props;
  return (
    <div className="operation-select">
      <ul>
        {
          getExampleOperations().map((exampleQuery) => {
            const { id, label } = exampleQuery;
            const className = id === activeOperationId ? 'active' : '';
            const onClick = () => setActiveOperationId(id);
            return (
              <li key={id} className={className}>
                <a href="#panel" onClick={onClick}>{label}</a>
              </li>
            );
          })
        }
      </ul>
      <style jsx>{`
        .operation-select {
          margin-top: 40px;
          padding: 20px;
        }
        @media screen and (max-width: 667px) {
          .operation-select {
            margin-top: 20px;
            padding: 0;
          }
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          border: 1px solid ${lightColor};
          -webkit-border-radius: 0.3em;
          -moz-border-radius: 0.3em;
          border-radius: 0.3em;
        }
        ul li a {
          width: calc(100% - 20px);
          padding: 10px;
          display: inline-block;
          color: black;
          text-decoration: none;
          text-indent: 10px;
          border-bottom: 1px solid ${lightColor};
        }
        ul li a:last-of-type {
          border-bottom: none;
        }
        ul li.active a {
          background: ${lightColorTransparent};
          box-shadow: inset 2px 0px 0px 0px ${darkColor};
        }
        ul li:hover a {
          background: ${lightColorTransparent};
          box-shadow: inset 2px 0px 0px 0px ${darkColor};
        }
      `}</style>
    </div>
  );
}

function ResultDisplay (props: { exampleOperation: ExampleOperation; }) {
  const { exampleOperation } = props;
  const { operation, source, variables } = exampleOperation;
  return (
    <section>
      <h1>Result</h1>
      {
        operation === 'query' ? (
          <QueryResultDisplay
            query={gql`${source}`}
            variables={variables}
          />
        ) : (
          <MutationResultDisplay
            mutation={gql`${source}`}
            variables={variables}
          />
        )
      }
    </section>
  );
}

function QueryResultDisplay (props: any) {
  const { query, variables } = props;
  const result = useQuery(
    query,
    {
      variables,
      fetchPolicy: 'no-cache'
    }
  );
  return <OperationResultDisplay result={result}/>;
}

function MutationResultDisplay (props: any) {
  const { mutation, variables } = props;
  const [runMutation, result] = useMutation(
    mutation,
    {
      variables,
      fetchPolicy: 'no-cache'
    }
  );
  useEffect(() => {
    runMutation();
  }, [mutation]);
  return <OperationResultDisplay result={result}/>;
}

function OperationResultDisplay(props: any) {
  const { result } = props;
  const { called, loading, error, data } = result;
  const [loadingDots, setLoadingDots] = useState(1);
  useEffect(() => {
    let timer = null;
    if (loading) {
      timer = setTimeout(() => {
        const nextLoadingDots = ((loadingDots + 1) % 3) + 1;
        setLoadingDots(nextLoadingDots);
      }, 200);
    }
    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  });
  let content
  if (error !== undefined) {
    content = 'Oops. Something went wrong.';
    console.error(JSON.stringify(error));
  }
  else {
    if (!called || loading || !process.browser) {
      content = `Loading${'.'.repeat(loadingDots)}`;
    }
    else {
      try {
        content = JSON.stringify(data, omitTypename, 2);
      } catch (err) {
        content = 'Oops. Something went wrong.';
        console.error(JSON.stringify(error));
      }
    }
  }
  return (
    <pre>
      <PrismCode
        code={content}
        language="json"
        plugins={["line-numbers"]}
      />
    </pre>
  );
}

function GetStarted () {
  return (
    <section id="get-started">
      <h1>Get Started</h1>
      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
      <a href="/api">API Playground</a>
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
        Source code available on <a href="https://github.com/ealmansi/gqlz" className="rgba-primary-2" target="_blank" rel="noopener noreferrer">Github</a>.
      </p>
      <style jsx>{`
        footer {
          padding: 50px;
          text-align: center;
          color: white;
          background: ${darkColor};
          box-shadow: inset 0 10px 10px -5px #0d1116;
        }
      `}</style>
    </footer>
  )
}

function withApolloClient (Component: React.ComponentType) {
  const client = new ApolloClient({
    uri: '/api',
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

/**
 * Source: https://pathof.dev/blog/code-highlighting-in-react-using-prismjs.
 */
class PrismCode extends React.Component<any> {
  private ref: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount() {
    this.highlight()
  }
  componentDidUpdate() {
    this.highlight()
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current)
    }
  }
  render() {
    const { code, plugins, language } = this.props as any
    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code ref={this.ref} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    )
  }
}

function omitTypename (key: string, value: any) {
  if (key === '__typename') {
    return undefined;
  }
  return value;
}

export default Index;
