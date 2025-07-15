

const LearnEvents = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  const handleClickAgain = (param) => {
    console.log(param);
  };
  return (
    <>
      <button onClick={handleClick}>Click here</button>
      <br />
      <button onClick={() => handleClickAgain("Clicked again")}>
        Click again
      </button>
    </>
  );
};

export default LearnEvents;
