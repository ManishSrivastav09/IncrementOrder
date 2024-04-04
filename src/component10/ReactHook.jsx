// import React, { useState } from "react";

import { ratingClasses } from "@mui/material";
import { purple } from "@mui/material/colors";

// const ReactHook = () => {
//   const [Count, setCount] = useState(0);
//   const click = () => {
//     setCount(Count + 1);
//   };
//   return (
//     <>
//       <div className="main">
//         <h1>{Count}</h1>
//         <button onClick={click}>Click</button>
//       </div>
//     </>
//   );
// };

// export default ReactHook;

// import React, { useState } from "react";

// const ReactHook = () => {
//   let time = new Date().toLocaleTimeString();
//   const [gettime, settime] = useState(time);

//   const click = () => {
//     let time = new Date().toLocaleTimeString();
//     settime(time)
//   };
//   setInterval(click,1000)
//   return (
//     <>
//       <div className="main">
//         <h1>{gettime}</h1>
//         <button onClick={click}>time</button>
//       </div>
//     </>
//   );
// };

// export default ReactHook;

import React, { useState } from 'react'

const ReactHook = () => {
let time=new Date().toLocaleTimeString()
const[gettime,settime]=useState(time)
  const click=()=>{
    let time=new Date().toLocaleTimeString()
     settime(time)
  }
  setInterval(click,1000)
  return (
    <div>
      <div className="main">
        <h1> {gettime}</h1>
        {/* <button onClick={click}time></button> */}
      </div>
    </div>
  )
}

export default ReactHook


// import React, { useState } from "react";

// const ReactHook = () => {
//   const purple = "#8e44ad";
//   const [bg, setbg] = useState(purple);
//   const bgChange = () => {
//     let newBg = "#34495e";
//     setbg(newBg);
//   };
//   return (
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button onClick={bgChange}>Click Me</button>
//       </div>
//     </>
//   );
// };

// export default ReactHook;



