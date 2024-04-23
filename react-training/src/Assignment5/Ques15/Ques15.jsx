// 15.Build an HOC called withLogger that logs the events of a component (e.g., mounting, unmounting, updating). Apply this HOC to a component and display the logs in the browser console.

import React from "react";
import WithLogger from "./WithLogger";
import Component from "./Component";

function Ques15() {
  return (
    <>
    <div>Ques15</div>
    <WithLogger cmp={Component}/>
    </>
  )
}

export default Ques15



