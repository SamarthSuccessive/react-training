// 4.Fetch a large dataset from an API and implement pagination. Display a limited number of items per page and provide navigation controls to load more pages of data.

import React, { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Ques4() {
  const [data, setdata] = useState([]);
  const [load, setLoad] = useState(true);
  const [currentPage, setcurrentPage] = useState(3);
  const [perpagedata, setperpagedata] = useState(10);
  const [totalPage, setTotalpage] = useState(1);
  //total page =array.length; 100
  //curr page=1;
  //last data=0 to 9    1-1*10
  // Logic: currentpageno-1 * perpagedata to (currentpageno-1 * perpagedat+(perpagedata-1)
  //page 2  10 to 19    2-1 *10
  //page 3 20 to 29     3-1*10
  //page 3 30 to 39     4-1*10

  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setdata(response.data);
        setTotalpage(Math.ceil(response.data.length / perpagedata));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  const handlePageChange = (e, value) => {
    console.log(value);
    setcurrentPage(value);
  };

  return (
    <>
      <div>Ques4</div>
      <div>Hello</div>
      {
        //loading false means now show the data
        load ? (
          <div>"Loading...</div>
        ) : (
          <div>
            <Display
              data={data}
              currentPage={currentPage}
              perpagedata={perpagedata}
            />
            <Stack spacing={2} justifyContent="center" alignItems="center">
              <Pagination
                count={totalPage}
                variant="outlined"
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>
            <br />
            <br />
            <input
              type="text"
              value={perpagedata}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setperpagedata(isNaN(value) ? 1 : value);
              }}
            ></input>
          </div>
        )
      }
    </>
  );
}

export default Ques4;
