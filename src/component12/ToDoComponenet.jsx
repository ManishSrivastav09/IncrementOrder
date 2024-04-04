import React from "react";

const ToDoComponenet = (props) => {
  return (
    <>
      <div className="todo___style">
        <i
          className="fa fa-times"
          arial-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoComponenet;
