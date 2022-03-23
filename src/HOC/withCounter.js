import React, { useState } from "react";

const withCounter = (OriginalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const updateCounter = () => {
      setCount(count + 1);
    };
    return <OriginalComponent count={count} setCount={updateCounter} />;
  };
  return NewComponent;
};

export default withCounter;
