import React from "react";
import Calculators from "./Calculators.css";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";

const Calculator = () => {
  return (
    <>
      <div className="calculator">
        <Display />
        <ButtonContainer />
      </div>
    </>
  );
};

export default Calculator;
