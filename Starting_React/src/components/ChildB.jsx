import React from "react";
import ChildC from "./ChildC";

const ChildB = (props) => {
  return (
    <>
      <div>ChildB</div>
      <ChildC />
    </>
  );
};

export default ChildB;
