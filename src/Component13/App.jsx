// import React, { useState } from "react";
// import "./App.css";
// const App = () => {
//   const [Increment, SetIncrement] = useState(0);
//   const increment = () => {
//     SetIncrement(Increment + 1);
//   };

//   const decrement = () => {
//     if (Increment > 0) {
//       SetIncrement(Increment - 1);
//     } else {
//       alert("sorry zero limit Reached");
//       Increment(0);
//     }
//   };
//   return (
//     <>
//       <div className="main">
//         <div>
//           <h1>{Increment}</h1>

//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import "./App.css";
const App = () => {
  const [Increment, SetIncrement] = useState(0);

  const increment = () => {
    SetIncrement(Increment + 1);
  };
  const decrement = () => {
    SetIncrement(Increment - 1);
  };
  return (
    <div>
      <div className="main">
        <div>
          <h1>{Increment}</h1>
          <div className="button">
            <Tooltip title="Add">
              <Button onClick={increment}>
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={decrement}>
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
