import React from 'react'

function Display(props) {
    const { data, currentPage, perpagedata } = props;
    const startIndex = (currentPage - 1) * perpagedata;
    const endIndex = startIndex + perpagedata;

    return (
        <div>
            {console.log(startIndex,endIndex)}
            {data.slice(startIndex, endIndex).map((item, index) => (
                <div key={index}>
                    {index+1},
                    {item.title},
                    {item.body}
                    <br/>
                    <br/>
                </div>
            ))}
        </div>
    );
}

export default Display;
