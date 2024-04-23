// 9.Create a React component that makes GraphQL queries to retrieve a list of items (e.g., a list of books, movies, or products) from a GraphQL API. Implement pagination for large datasets and display the data in a user-friendly way.

import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MoviesList from "./MoviesList";

function Ques9() {
    const client = new ApolloClient({ 
        uri: 'https://star-wars-graphql-dont-change.p.rapidapi.com/',
        headers: {
            'x-rapidapi-key': '74d44d37aemsh787e379205ffa60p144bcdjsn11d0cc3e1d96',
            'x-rapidapi-host': 'star-wars-graphql-dont-change.p.rapidapi.com',
            'Content-Type': 'application/json',
            my_key: '123'
        },
        cache: new InMemoryCache(), 
      });
    return(
        <>
          <div>
          <ApolloProvider client={client}>
            <h1>Ques 9</h1>
            <MoviesList />
            </ApolloProvider>
      
          </div>
        </>
        )

}

export default Ques9;
