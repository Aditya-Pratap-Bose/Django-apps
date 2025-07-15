import React from "react";
import useCounter from "../hooks/useCounter";

const LearnCustomHooks = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Custom hooks</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default LearnCustomHooks;
