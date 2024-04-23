import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Display from './Display';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const query = gql`
  query {
    allFilms {
      films {
        created
        director
        episodeID
        title
      }
    }
    allStarships {
      edges {
        node {
          crew
          created
          cargoCapacity
        }
      }
    }
  }
`;

function MoviesList() {
  const [currentpageno,setcurrentpageno]=useState(1);
const perpagedata=4;  
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const totalpages=data.allStarships.edges.length/perpagedata;
  const handlePageChange=(e,value)=>{
    setcurrentpageno(value)
  }
  return (
    <>
    <Display data={data} currentpageno={currentpageno} perpagedata={perpagedata} />
    <br/>
    <br/>
    <Stack spacing={2} justifyContent="center" alignItems="center">
              <Pagination
                count={totalpages}
                variant="outlined"
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>

    </>
  );
}

export default MoviesList;
