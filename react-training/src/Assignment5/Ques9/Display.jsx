import React from 'react'
function Display(props) {
    const currentpageno=props.currentpageno;
    const perpagedata=props.perpagedata;
    const startindex=(currentpageno-1)*perpagedata;
    const endindex=startindex+(perpagedata-1);
  return (
    <>
      <div>MoviesList</div>
      <br/>
      <br/>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <table style={{border:"2px solid black"}}>
        <thead>
          <tr>
            <th>Index</th>
            <th>crew</th>
            <th>created</th>
            <th>cargoCapacity</th>
          </tr>
        </thead>
        <tbody>
          {props.data.allStarships.edges.slice(startindex,endindex).map((item, index) => (
            <tr key={index} style={{ border: '1px solid black', padding: '8px' }}>
              <td>{index+1}</td>
              <td>{item.node.crew}</td>
              <td>{item.node.created}</td>
              <td>{item.node.cargoCapacity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    
    </>
  )
}

export default Display