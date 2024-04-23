// 8.set up a GraphQL client library like Apollo Client. Create a simple component that uses the client to fetch and display data from a GraphQL API.

import React from "react";
import PostList from "./Postlist";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


function Ques8() {
  const client = new ApolloClient({ 
    uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
    headers: {
      'x-rapidapi-key': '74d44d37aemsh787e379205ffa60p144bcdjsn11d0cc3e1d96',
      'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    cache: new InMemoryCache(), 
  });
  return(
  <>
    <div>
    <ApolloProvider client={client}>

      <h1>My Blog</h1>
      <PostList />
      </ApolloProvider>

    </div>
  </>
  )
}

export default Ques8;
