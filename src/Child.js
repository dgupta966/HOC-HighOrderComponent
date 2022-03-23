import React from "react";
import withCounter from "./HOC/withCounter";

const Child = (props) => {
  console.log(props);
  return (
    <div className="button">
      <button onClick={props.setCount}>Counter {props.count} </button>
    </div>
  );
};

export default withCounter(Child);
