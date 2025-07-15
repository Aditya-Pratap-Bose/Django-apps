import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [count, setCount] = useState(0);
  const [randomNum, setRandomNum] = useState(0);

  const IncreaseCount = () => {
    setCount(count + 1);
  };

  const gnerateNum = () => {
    const randomNum = Math.floor(Math.random() * 100);
    setRandomNum(randomNum);
  };

  useEffect(() => {
    // the logic goes here
    console.log("UseEffect called");

    // Clean Up function
    return ()=>{
      console.log('Cleanup function is called');
    }
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={IncreaseCount}>IncreaseCount</button>
      <hr />
      <h2>Random Number: {randomNum}</h2>
      <button onClick={gnerateNum}>Generate Number</button>
    </>
  );
};

export default LearnUseEffect;
