"use client";

import { gql, useQuery } from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map(({ title }: { title: string }) => (
    <div>
      <h3>{title}</h3>
    </div>
  ));
};

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
    }
  }
`;

export default Home;
