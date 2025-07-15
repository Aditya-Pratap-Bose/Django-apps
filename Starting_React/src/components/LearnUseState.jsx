import { useState } from "react";

const LearnUseState = () => {
  const [Num, setNum] = useState(5);

  const handleNum = () => {
    setNum(10);
  };

  const [stockPrice, setStockPrice] = useState({ stock: "Apple", price: 100 });
  console.log(stockPrice);

  const updateStockPrice = () => {
    setStockPrice({ ...stockPrice, price: 200 });
  };
  return (
    <>
      <h2>Number : {Num}</h2>
      <button onClick={handleNum}>Click Here</button>
      <hr />
      <h2>
        {stockPrice.stock}: {stockPrice.price}
      </h2>
      <button onClick={updateStockPrice}>Update Stock</button>
    </>
  );
};

export default LearnUseState;
