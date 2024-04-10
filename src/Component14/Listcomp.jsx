import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Listcomp = (props) => {
  const [line, SetLine] = useState(false);
  const cutIt = () => {
    SetLine(true);
  };
  return (
    <div className="todo_style">
      <span onClick={cutIt}>
        <DeleteIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};
export default Listcomp;
