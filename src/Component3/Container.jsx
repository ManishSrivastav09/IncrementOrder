import React from "react";
import Containers from "./Containers.css";
const Container = (props) => {
  return <div className="Container">{props.children}</div>;
};

export default Container;
