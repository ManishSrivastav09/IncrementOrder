import React from "react";
import ButtonContainers from "./ButtonContainers.css";
const ButtonContainer = () => {
  const ButtoName = [
    "c",
    "1",
    "2",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "0",
    ".",
  ];
  return (
    <>
      <div className="buttons-container">
        {ButtoName.map((ButtoName) => {
          return <button className="style-button">{ButtoName}</button>;
        })}
      </div>
    </>
  );
};

export default ButtonContainer;
