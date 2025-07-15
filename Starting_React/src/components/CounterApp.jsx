import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const IncreaseCount = () => {
    setCount(count + 1);
  };

  const DecreaseCount = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={IncreaseCount}>Increase Count</button>
      <button onClick={DecreaseCount}>Decrease Count</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
};

export default CounterApp;
