"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export const Store = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
