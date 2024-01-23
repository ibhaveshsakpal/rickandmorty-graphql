import { useQuery, gql } from "@apollo/client";

const GRAPHQL_QUERY = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      image
      status
      episode {
        name
      }
      location {
        name
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { error, loading, data } = useQuery(GRAPHQL_QUERY, {
    variables: {
      id: id,
    },
  });

  return {
    error,
    loading,
    data,
  };
};
