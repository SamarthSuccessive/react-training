// 16.Develop an HOC named withDataFetching that fetches data from an API and passes it as props to a component. Use this HOC to retrieve and display data in a component.

import React from 'react';
import WithDataFetching from './WithDataFetching';
import Component from './Component';

const Ques16 = () => {
  return (
    <>
    <div></div>
    <WithDataFetching  cmp={Component}/>
    </>
   
  )
}

export default Ques16

