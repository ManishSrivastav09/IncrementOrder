import React from "react";
import "./NameInput.css";
const NameInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <input
        className="style_name"
        onChange={handleOnChange}
        type="text"
        name=""
        id=""
        placeholder="Enter Name here"
      />
    </>
  );
};

export default NameInput;
