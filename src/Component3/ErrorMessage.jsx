import React from "react";

const ErrorMessage = () => {
  const favname = [
    "Manish",
    "Kishan",
    "Shivam",
    "Anup",
    "Manoj",
    "Ashish",
    "Rinku",
  ];
  return (
    <div>{favname.length === 0 ? <h3>My favourate friend</h3> : null}</div>
  );
};

export default ErrorMessage;
