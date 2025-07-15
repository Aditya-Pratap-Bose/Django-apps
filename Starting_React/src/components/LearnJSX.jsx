// const h2Element = React.createElement("h2", null, "LearnJSX")

const LearnJSX = () => {
  let stock = "TESLA";
  return (
    <>
      {/* {h2Element} */}
      <h2>JSX</h2>

      <h2>Price: {10 + 20}</h2>

      <h2>Srock name: {stock}</h2>

      <h2 className="bg-success">Class</h2>

      <h2 className={stock}>Dynamic Class</h2>
    </>
  );
};

export default LearnJSX;
