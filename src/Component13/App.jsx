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
          <h1>manish srivastav</h1>
          <p>gitbase</p>
          <p>github</p>
          <p>github</p>
          <p>github</p>
          <p>github</p>
          <p>manish</p>
          <p>saurabh</p>
          <p>kishan</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default App;
