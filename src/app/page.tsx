"use client";

import { gql, useQuery } from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map((item: { title: string }, index: number) => (
    <div key={`book-${index}`}>
      <h3>{item.title}</h3>
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
