import React from "react";
import Favmovies from "./Favmovies";
import ErrorMessssage from "./ErrorMessage";

const ConditionalRendering = () => {
  return (
    <div>
      <Favmovies />
      <ErrorMessssage />
    </div>
  );
};

export default ConditionalRendering;
