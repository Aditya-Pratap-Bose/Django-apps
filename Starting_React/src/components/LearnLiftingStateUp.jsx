const LearnLiftingStateUp = (props) => {
  const handleClick = () => {
    let stock = "APPLE";
    props.someClick(stock)
  };
  return (
    <>
      <h1>Lifting state Up</h1>
      <button onClick={handleClick}>Clcik Here</button>
    </>
  );
};

export default LearnLiftingStateUp;
