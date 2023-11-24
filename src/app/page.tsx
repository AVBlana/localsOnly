"use client";

import { Experience } from "@/gql/graphql";
import { gql, useQuery } from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(GET_EXPERIENCES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.experiences.map((item: Experience, index: number) => (
    <div key={`book-${index}`}>
      <h3>{item.name}</h3>
    </div>
  ));
};

const GET_EXPERIENCES = gql`
  query getExperiences {
    experiences {
      name
    }
  }
`;

export default Home;
