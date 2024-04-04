import React from "react";

const Miniprject = () => {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};
  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good After Noon";
    cssStyle.color = "red";
  } else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }
  return (
    <div>
      <h1>
        {" "}
        Hello sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  );
};

export default Miniprject;
