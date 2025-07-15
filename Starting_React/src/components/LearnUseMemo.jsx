import { useMemo, useState } from "react";
const LearnUseMemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10000000);

  const IncreaseCount = () => {
    if (count===10) {
      setNumber(999999)
    }
    setCount(count + 1);
  };

  //   const sumOfNumbers = () => {
  //     let sum = 0;
  //     for (let i = 1; i <= number; i++) {
  //       sum += 1;
  //     }
  //     return sum;
  //   };

  const sumOfNumbers = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += 1;
    }
    return sum;
  }, [number]);

  console.log(`Sum of numbers from 1 to ${number}:`, sumOfNumbers);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCount}>Increase Count</button>
    </>
  );
};

export default LearnUseMemo;
