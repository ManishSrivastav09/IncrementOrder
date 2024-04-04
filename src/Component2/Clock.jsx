// import React from "react";

// const Clock = () => {
//   const time = new Date().toLocaleTimeString();
//   const date = new Date().toLocaleDateString();
//   return (
//     <div>
//       <p className="fw-bolder">
//         This is the clock that shows the time is Bharat at all time {time}
//       </p>
//       <p> This is the current date {date}</p>
//     </div>
//   );
// };

// export default Clock;

import React from "react";
const Clock = () => {
  const favfood = [
    "Dal",
    "roti",
    "mixveg",
    "papad",
    "paneerdum",
    "Daalmakhani",
    "Rayta",
  ];
  return (
    <>
      <h1>Healthy Food</h1>

      <ul className="list-group">
        {favfood.map((list) => {
          return (
            <li key={list} className="list-group-item">
              {list}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Clock;
