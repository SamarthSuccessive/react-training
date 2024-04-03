import React, { useContext } from "react";
import { Mycontext } from "./Createcontextq11";

function Productsq11(props) {
  // const id=props.id;
  const productarray = props.product;
  const tableCellStyle = {
    borderBottom: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const tableHeaderStyle = {
    backgroundColor: "violet",
    borderBottom: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };
  const middlediv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  let { cart, setCart } = useContext(Mycontext);

  const add = (array) => {
    setCart([...cart, array]);
  };

  return (
    <>
      <div style={middlediv}>
        <table style={{ border: "solid 2px black" }}>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Price</th>
          </tr>
          <tbody>
            {productarray.map((val) => (
              <tr key={val.id}>
                <td style={tableCellStyle}>{val.name}</td>
                <td style={tableCellStyle}>{val.price}</td>
                <td>
                  <button onClick={() => add( val )}>Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Productsq11;
