import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Listcomp from "./Listcomp";

const ToDoList = () => {
  const [Item, setItems] = useState("");
  const [newitems, setNewItems] = useState([]);

  const itemevent = (event) => {
    setItems(event.target.value);
  };

  const listOfItems = () => {
    setNewItems((prevalue) => {
      return [...prevalue, Item];
    });
    setItems("");
  };
  return (
    <>
      <div className="main">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an intems"
            onChange={itemevent}
            value={Item}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitems.map((val, index) => {
              return <Listcomp key={index} text={val} />;
            })}
            <br />
          </ol>
        </div>
      </div>
    </>
  );
};
export default ToDoList;
