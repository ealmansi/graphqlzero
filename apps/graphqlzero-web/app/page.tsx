"use client";

import { MutationResult, QueryResult } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import React, { ReactElement, useEffect, useState } from "react";
import * as Sentry from "@sentry/browser";
import ga4 from "react-ga4";

import ExampleOperation, {
  getDefaultExampleOperation,
  getExampleOperations,
} from "../src/example-operation";
import { font } from "../src/font";
import { okaidia } from "../src/okaidia";
import { omitTypename } from "../src/omit-typename";
import { PrismCode } from "../src/prism-code";
import { unindent } from "../src/unindent";
import { withApolloClient } from "../src/with-apollo-client";

const PRIMARY_COLOR_0 = "rgba(235,  3,160,1)";
const PRIMARY_COLOR_1 = "rgba(245,149,214,1)";
const PRIMARY_COLOR_1_ALPHA = "rgba(245,149,214,0.2)";
const PRIMARY_COLOR_2 = "rgba(238, 68,183,1)";
const PRIMARY_COLOR_3 = "rgba(199,  0,134,1)";
const PRIMARY_COLOR_4 = "rgba(126,  0, 85,1)";
const PRIMARY_COLOR_5 = "rgba(98,   0, 66,1)";

export default withApolloClient(function () {
  initialize();
  return (
    <div>
      <TopBar />
      <Header />
      <Main />
      <Footer />
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Raleway", sans-serif;
        }
        .rgba-primary-0 {
          color: ${PRIMARY_COLOR_0};
        }
        .rgba-primary-1 {
          color: ${PRIMARY_COLOR_1};
        }
        .rgba-primary-2 {
          color: ${PRIMARY_COLOR_2};
        }
        .rgba-primary-3 {
          color: ${PRIMARY_COLOR_3};
        }
        .rgba-primary-4 {
          color: ${PRIMARY_COLOR_4};
        }
        .rgba-primary-5 {
          color: ${PRIMARY_COLOR_5};
        }
        pre.word-wrap,
        code.word-wrap {
          white-space: pre-wrap !important;
          white-space: -moz-pre-wrap !important;
          white-space: -pre-wrap !important;
          white-space: -o-pre-wrap !important;
          word-wrap: break-word !important;
        }
        div.code-toolbar > .toolbar {
          margin-right: 5px;
        }
      `}</style>
      <style jsx global>
        {font}
      </style>
      <style jsx global>
        {okaidia}
      </style>
    </div>
  );
});

function initialize() {
  if (typeof window === "undefined") {
    return;
  }
  const NEXT_PUBLIC_SENTRY_DSN = process.env["NEXT_PUBLIC_SENTRY_DSN"];
  if (NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({ dsn: NEXT_PUBLIC_SENTRY_DSN });
  }
  const NEXT_PUBLIC_GA_MEASUREMENT_ID =
    process.env["NEXT_PUBLIC_GA_MEASUREMENT_ID"];
  if (NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    ga4.initialize(NEXT_PUBLIC_GA_MEASUREMENT_ID);
  }
}

function TopBar(): ReactElement {
  return (
    <div>
      <nav>
        <a
          href="/api"
          className="brand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>
            GraphQL<span className="rgba-primary-3">Zero</span>
          </strong>
        </a>
        <ul>
          <li>
            <a href="#examples" className="examples rgba-primary-4">
              Examples
            </a>
          </li>
          <li>
            <a href="#get-started" className="get-started rgba-primary-4">
              Get Started
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ealmansi/graphqlzero"
              className="rgba-primary-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        div {
          border-bottom: 1px solid ${PRIMARY_COLOR_1};
          overflow: auto;
          padding: 20px 10px;
        }
        nav {
          max-width: 767px;
          margin: auto;
        }
        .brand {
          color: black;
        }
        a {
          padding: 20px 10px;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media screen and (max-width: 480px) {
          nav .examples {
            display: none;
          }
          nav .get-started {
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
  );
}

function Header(): ReactElement {
  return (
    <header>
      <h1>
        GraphQL<span className="rgba-primary-3">Zero</span>
      </h1>
      <h2>Fake Online GraphQL API for Testing and Prototyping</h2>
      <p>
        Zero-Config, No Registration, Compatible with React, Angular, Vue, and
        more{" "}
      </p>
      <p>
        Powered by{" "}
        <a
          href="https://jsonplaceholder.typicode.com"
          className="rgba-primary-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSONPlaceholder
        </a>{" "}
        and{" "}
        <a
          href="https://www.apollographql.com"
          className="rgba-primary-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apollo
        </a>
      </p>
      <style jsx>{`
        header {
          padding: 70px 50px;
          border-bottom: 1px solid ${PRIMARY_COLOR_1};
          text-align: center;
        }
        @media screen and (max-width: 480px) {
          header {
            padding: 40px 20px;
          }
        }
        header h1 {
          font-size: 64px;
        }
        @media screen and (max-width: 767px) {
          header h1 {
            font-size: 7vw;
          }
        }
        @media screen and (max-width: 480px) {
          header h1 {
            font-size: 36px;
          }
        }
        @media screen and (max-width: 767px) {
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
  );
}

function Main(): ReactElement {
  return (
    <main>
      <div>
        <Intro />
        <Examples />
        <GetStarted />
        <Schema />
      </div>
      <style jsx>{`
        main {
          padding: 30px 10px 100px 10px;
          border-bottom: 1px solid ${PRIMARY_COLOR_1};
        }
        main div {
          max-width: 767px;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
}

function Intro(): ReactElement {
  return (
    <section id="intro">
      <h1>Intro</h1>
      <p>
        <strong>
          GraphQL<span className="rgba-primary-3">Zero</span>
        </strong>{" "}
        is a free, online GraphQL API that you can use to get fake data from a
        real backend while testing or prototyping your app. It is inspired and
        powered by{" "}
        <a
          href="https://jsonplaceholder.typicode.com"
          className="rgba-primary-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSONPlaceholder
        </a>
        , serving the same dataset but in the form of a GraphQL server. You'll
        find it useful for learning more about GraphQL, writing tutorials,
        testing new libraries, and more.
      </p>
      <style jsx>{`
        section {
          margin-bottom: 20px;
          padding: 20px 10px 0 10px;
        }
        p {
          text-align: justify;
        }
      `}</style>
    </section>
  );
}

function Examples(): ReactElement {
  const defaultOperation = getDefaultExampleOperation();
  const [activeOperationId, setActiveOperationId] = useState(
    defaultOperation.id
  );
  let activeOperation = getExampleOperations().find((exampleOperation) => {
    return exampleOperation.id === activeOperationId;
  });
  if (activeOperation === undefined) {
    activeOperation = defaultOperation;
  }
  return (
    <section id="examples" className="examples">
      <h1>Examples</h1>
      <p>
        Below you can try out a few example queries and mutations for common use
        cases like getting a list of resources, retrieving a specific entity, or
        exploring nested relationships.
      </p>
      <div id="example-top" className="example-top">
        <div className="top-row">
          <div className="left-column">
            <OperationDisplay exampleOperation={activeOperation} />
            <VariablesDisplay exampleOperation={activeOperation} />
          </div>
          <div className="right-column">
            <OperationSelect
              activeOperationId={activeOperationId}
              setActiveOperationId={setActiveOperationId}
            />
          </div>
        </div>
        <ResultDisplay exampleOperation={activeOperation} />
      </div>
      <p>
        For more details about the different entities, check out the{" "}
        <a href="#schema" className="rgba-primary-2">
          Schema
        </a>
        .
      </p>
      <style jsx>{`
        .examples {
          margin-bottom: 20px;
          padding: 20px 10px 0 10px;
        }
        .examples p {
          text-align: justify;
        }
        .examples .example-top {
          margin: 50px 0;
          padding: 20px;
          border: 1px solid ${PRIMARY_COLOR_1};
          -webkit-border-radius: 0.3em;
          -moz-border-radius: 0.3em;
          border-radius: 0.3em;
        }
        .examples .example-top .top-row .left-column {
          width: calc(100% - 250px);
          display: inline-block;
          vertical-align: top;
        }
        @media screen and (max-width: 767px) {
          .examples .example-top .top-row .left-column {
            width: 100%;
            display: block;
          }
        }
        .examples .example-top .top-row .right-column {
          width: 250px;
          display: inline-block;
          vertical-align: top;
        }
        @media screen and (max-width: 767px) {
          .examples .example-top .top-row .right-column {
            width: 100%;
            display: block;
          }
        }
      `}</style>
    </section>
  );
}

interface OperationDisplayProps {
  exampleOperation: ExampleOperation;
}

function OperationDisplay(props: OperationDisplayProps): ReactElement {
  const { exampleOperation } = props;
  const { operation, source } = exampleOperation;
  const heading = operation === "query" ? "Query" : "Mutation";
  return (
    <section>
      <h1>{heading}</h1>
      <pre className="word-wrap">
        <PrismCode
          code={unindent(source)}
          language="graphql"
          plugins={["line-numbers"]}
        />
      </pre>
    </section>
  );
}

interface VariablesDisplayProps {
  exampleOperation: ExampleOperation;
}

function VariablesDisplay(props: VariablesDisplayProps): ReactElement {
  const { exampleOperation } = props;
  const { variables } = exampleOperation;
  const json = JSON.stringify(variables, null, 2);
  return (
    <section>
      <h1>Variables</h1>
      <pre className="word-wrap">
        <PrismCode code={json} language="json" plugins={["line-numbers"]} />
      </pre>
    </section>
  );
}

interface OperationSelectProps {
  activeOperationId: string;
  setActiveOperationId: (id: string) => void;
}

function OperationSelect(props: OperationSelectProps): ReactElement {
  const { activeOperationId, setActiveOperationId } = props;
  return (
    <div className="operation-select">
      <ul>
        {getExampleOperations().map((exampleQuery) => {
          const { id, label } = exampleQuery;
          const className = id === activeOperationId ? "active" : "";
          const onClick = () => setActiveOperationId(id);
          return (
            <li key={id} className={className}>
              <a href="#example-top" onClick={onClick}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .operation-select {
          margin: 40px 0 0 20px;
          padding: 20px 0;
        }
        @media screen and (max-width: 767px) {
          .operation-select {
            margin: 20px 0 0 0;
            padding: 0;
          }
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          border: 1px solid ${PRIMARY_COLOR_1};
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
          border-bottom: 1px solid ${PRIMARY_COLOR_1};
        }
        ul li a:last-of-type {
          border-bottom: none;
        }
        ul li.active a {
          background: ${PRIMARY_COLOR_1_ALPHA};
          box-shadow: inset 2px 0px 0px 0px ${PRIMARY_COLOR_4};
        }
        ul li:hover a {
          background: ${PRIMARY_COLOR_1_ALPHA};
          box-shadow: inset 2px 0px 0px 0px ${PRIMARY_COLOR_4};
        }
      `}</style>
    </div>
  );
}

interface ResultDisplayProps {
  exampleOperation: ExampleOperation;
}

function ResultDisplay(props: ResultDisplayProps): ReactElement {
  const { exampleOperation } = props;
  const { operation, source, variables } = exampleOperation;
  return (
    <section>
      <h1>Result</h1>
      {operation === "query" ? (
        <QueryResultDisplay
          query={gql`
            ${source}
          `}
          variables={variables}
        />
      ) : (
        <MutationResultDisplay
          mutation={gql`
            ${source}
          `}
          variables={variables}
        />
      )}
    </section>
  );
}

interface QueryResultDisplayProps {
  query: ReturnType<typeof gql>;
  variables: {
    [key: string]: any;
  };
}

function QueryResultDisplay(props: QueryResultDisplayProps): ReactElement {
  const { query, variables } = props;
  const result = useQuery(query, {
    variables,
    fetchPolicy: "no-cache",
  });
  return <OperationResultDisplay result={result} />;
}

interface MutationResultDisplayProps {
  mutation: ReturnType<typeof gql>;
  variables: {
    [key: string]: any;
  };
}

function MutationResultDisplay(
  props: MutationResultDisplayProps
): ReactElement {
  const { mutation, variables } = props;
  const [runMutation, result] = useMutation(mutation, {
    variables,
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    runMutation();
  }, [mutation, runMutation]);
  return <OperationResultDisplay result={result} />;
}

interface OperationResultDisplayProps {
  result: QueryResult | MutationResult;
}

function OperationResultDisplay(
  props: OperationResultDisplayProps
): ReactElement {
  const { result } = props;
  const { called, loading, error, data } = result;
  const [loadingDots, setLoadingDots] = useState(1);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
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
  let content;
  if (error !== undefined) {
    content = "Oops. Something went wrong.";
    console.error(JSON.stringify(error));
  } else {
    if (!called || loading || typeof window === "undefined") {
      content = `Loading${".".repeat(loadingDots)}`;
    } else {
      try {
        content = JSON.stringify(data, omitTypename, 2);
      } catch (err) {
        content = "Oops. Something went wrong.";
        console.error(JSON.stringify(error));
      }
    }
  }
  return (
    <pre className="word-wrap">
      <PrismCode code={content} language="json" plugins={["line-numbers"]} />
      <style jsx>{`
        pre {
          max-height: 500px;
          overflow-y: auto;
        }
      `}</style>
    </pre>
  );
}

function GetStarted(): ReactElement {
  return (
    <section id="get-started">
      <h1>Get Started</h1>
      <p>
        The easiest way to get started is by visiting the{" "}
        <a
          href="/api"
          className="rgba-primary-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GraphQL API Playground
        </a>
        . There, you can see the API's docs and run queries against the real
        backend. Feel free to copy one of the queries in the{" "}
        <a href="#examples" className="examples rgba-primary-4">
          examples
        </a>{" "}
        above to get you started.
      </p>
      <div className="window">
        <img src="/img/playground-1.png" alt="Playground Query"></img>
      </div>
      <p className="caption">1) GraphQL Playground: Query Execution.</p>
      <div className="window">
        <img src="/img/playground-2.png" alt="Playground Docs"></img>
      </div>
      <p className="caption">2) GraphQL Playground: API Docs.</p>
      <p>
        To use{" "}
        <strong>
          GraphQL<span className="rgba-primary-3">Zero</span>
        </strong>{" "}
        from your app, a simple POST request using fetch will do the job. You
        can try out the following code right from your browser's console.
      </p>
      <pre className="word-wrap">
        <PrismCode
          code={unindent(`
            fetch("https://graphqlzero.almansi.me/api", {
              "method": "POST",
              "headers": { "content-type": "application/json" },
              "body": JSON.stringify({
                query: \`{
                  user(id: 1) {
                    id
                    name
                  }
                }\`
              })
            }).then(res => res.json()).then(console.log)
            // { "data": { "user": { ... } } }
          `)}
          language="javascript"
          plugins={["line-numbers"]}
        />
      </pre>
      <p>
        A GraphQL client will be necessary for anything beyond the basics. For
        example, if you're using JavaScript,{" "}
        <a
          href="https://www.apollographql.com/docs/react"
          className="rgba-primary-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apollo Client
        </a>{" "}
        can come in handy. The following code will get your client set up and
        issue a simple query.
      </p>
      <pre className="word-wrap">
        <PrismCode
          code={unindent(`
            import {
              ApolloClient, InMemoryCache, gql
            } from '@apollo/client';
            
            const client = new ApolloClient({
              uri: 'https://graphqlzero.almansi.me/api',
              cache: new InMemoryCache()
            });
            client.query({ query: gql\`
              {
                user(id: 1) {
                  id
                  name
                }
              }
            \`}).then(console.log);
            // { "data": { "user": { ... } } }
        `)}
          language="javascript"
          plugins={["line-numbers"]}
        />
      </pre>
      <style jsx>{`
        section {
          margin-bottom: 20px;
          padding: 20px 10px 0 10px;
        }
        p {
          margin-bottom: 40px;
          text-align: justify;
        }
        .caption {
          text-align: center;
          color: gray;
        }
        .window {
          width: 100%;
          max-width: 632px;
          margin: 0 auto;
          background: white;
          border-radius: 0.3em;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1),
            0 8px 32px rgba(0, 0, 0, 0.12);
          overflow: hidden;
          padding-top: 26px;
          position: relative;
        }
        .window::before {
          width: 100%;
          height: 25px;
          max-width: 632px;
          position: absolute;
          top: 0;
          display: block;
          content: " ";
          background: linear-gradient(#f0f0f0, #dedede);
          border-radius: 0.3em 0.3em 0 0;
          box-shadow: inset 0 2px 2px -2px white, 0 1px rgba(0, 0, 0, 0.4);
        }
        .window img {
          width: 100%;
          max-width: 632px;
          margin: -2px 0 -10px 0;
        }
        pre {
          width: 70%;
          margin: 0 auto 60px auto;
        }
        @media screen and (max-width: 767px) {
          pre {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

function Schema(): ReactElement {
  return (
    <section id="schema">
      <h1>Schema</h1>
      <p>
        <strong>
          GraphQL<span className="rgba-primary-3">Zero</span>
        </strong>{" "}
        is powered by{" "}
        <a
          href="https://jsonplaceholder.typicode.com"
          className="rgba-primary-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSONPlaceholder
        </a>{" "}
        and serves the same dataset in the form of a GraphQL API. Six different
        types of entities exist: <em>users</em>, <em>posts</em>,{" "}
        <em>comments</em>, <em>todos</em>, <em>albums</em>, and <em>photos</em>.
        These entities are also related to each other; for example, a user has
        many posts, a photo belongs to an album, etc.
      </p>
      <p>
        For more information on how to query different entities, check out the{" "}
        <a href="#examples" className="rgba-primary-4">
          examples
        </a>{" "}
        or dive into the full schema in the{" "}
        <a
          href="/api"
          className="rgba-primary-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GraphQL API Playground
        </a>
        .
      </p>
      <style jsx>{`
        section {
          margin-bottom: 20px;
          padding: 20px 10px 0 10px;
        }
      `}</style>
    </section>
  );
}

function Footer(): ReactElement {
  return (
    <footer>
      <p>
        Source code available on{" "}
        <a
          href="https://github.com/ealmansi/graphqlzero"
          className="rgba-primary-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>GitHub</strong>
        </a>
        . License: MIT.
      </p>
      <style jsx>{`
        footer {
          padding: 50px;
          text-align: center;
          color: lightgray;
          background: ${PRIMARY_COLOR_5};
          box-shadow: inset 0 10px 10px -5px #0d1116;
        }
      `}</style>
    </footer>
  );
}
