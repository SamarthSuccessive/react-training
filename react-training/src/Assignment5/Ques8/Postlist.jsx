import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query {
    countries(namePrefix: "America") {
      edges {
        node {
          name
          capital
          flagImageUri
          currencyCodes
        }
      }
    }
  }
`;

const PostList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.countries.edges.map(({ node }) => (
          <li key={node.name}>
            <h3>{node.name}</h3>
            <p>Capital: {node.capital}</p>
            <img src={node.flagImageUri} alt={`${node.name} flag`} />
            <p>Currencies: {node.currencyCodes.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
