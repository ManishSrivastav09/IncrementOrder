import React from "react";
import "./Slot.css";
const SlotM = (props) => {
  //   let x = "😄";
  //   let y = "😄";
  //   let z = "🐁";

  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h2>This is matching</h2>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h2>This is not matching </h2>
          <hr />
        </div>
      </>
    );
  }
};
const SlotMachine = () => {
  return (
    <>
      <h1 className="heading__style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}> Slot machine game</span>🎰
      </h1>
      <div
        className="slotmachinr"
        style={{ textAlign: "center", marginLeft: "30%", fontSize: "10px" }}
      >
        <SlotM x="😄" y="😄" z="😄" />
        <hr />
        <SlotM x="🍌" y="🍎" z="😄" />
        <hr />
        <SlotM x="🍊" y="⛽" z="😄" />
        <hr />
        <SlotM x="🍊" y="⛽" z="🍋" />
        <hr />
        <SlotM x="😄" y="😄" z="😄" />
      </div>
    </>
  );
};

export default SlotMachine;
