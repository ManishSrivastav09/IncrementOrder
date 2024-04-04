import React from "react";

const TamplateLiterals = () => {
  const fname = "manish";
  const lname = "srivastav";
  const Address = "Lucknow uttar pradesh";
  return (
    <>
      {/* <h1>my name is {fname + " " + lname}</h1> */}
      {/* <h1>my first name is {`${fname} and my last is name ${lname}`}</h1> */}
      <h1>{`my first name is ${fname} and my last name is ${lname} my address ${Address}`}</h1>
    </>
  );
};

export default TamplateLiterals;
