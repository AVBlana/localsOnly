"use client";

const IS_DEVELOPMENT = process.env.NODE_ENV;

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: IS_DEVELOPMENT
    ? "http://localhost:4000/graphql"
    : "https://locals-only-da073e224bd3.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export const Store = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
