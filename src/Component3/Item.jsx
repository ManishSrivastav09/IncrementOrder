import React from "react";

const Item = (props) => {
  const click = (event) => {
    console.log(` ${props.favname} being bought`);

    console.log(event);
  };
  return (
    <div>
      <li
        key={props.favname}
        className="list-group-item"
        style={{ color: "red" }}
      >
        {props.favname}
        <button className={`$={button_style} btn btn-info`} onClick={click}>
          buy
        </button>
      </li>
    </div>
  );
};

export default Item;
