import React from "react";

const Calculator = () => {
  let add = 9+8;
  let sub = 3 - 5;
  let mul = 3 * 5;
  let div = 5 / 4;
  return (
    <>
      <ul>
        <li>the sum of number is {add}</li>
        <li>the sub of number is {sub}</li>
        <li>the mul of number is {mul}</li>
        <li>the div of number is {div}</li>
      </ul>
    </>
  );
};

export default Calculator;
