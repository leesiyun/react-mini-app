import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((current) => current + 1);

  return (
    <div>
      <h1>Total clicks:{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
};

export default Counter;
