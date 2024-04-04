// import React, { useState } from "react";
// import "./Form.css";
// const Forms = () => {
//   const [name, setName] = useState("");
//   const [FullName, SetFullName] = useState("");
//   const [Lastname, setLastName] = useState("");
//   const [newLastName, setNewlastName] = useState("");
//   const [password, SetPassword] = useState("");
//   const [newpassword, SetNewPassword] = useState("");

//   const inputevent = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);
//   };

//   const inputeventtwo = (event) => {
//     setLastName(event.target.value);
//   };

//   const inputeventthree = (event) => {
//     SetPassword(event.target.value);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     SetFullName(name);
//     setNewlastName(Lastname);
//     SetNewPassword(password);
//   };
//   return (
//     <>
//       <div className="main">
//         <form onSubmit={onSubmit}>
//           <h1>
//             Hello {FullName} {newLastName}
//           </h1>
//           <p>{newpassword}</p>
//           <input
//             style={{ width: "400px" }}
//             type="text"
//             placeholder="Enter Your name"
//             onChange={inputevent}
//             value={name}
//           />
//           <br />
//           <br />
//           <input
//             style={{ width: "400px" }}
//             type="text"
//             placeholder="Enter your Last Name"
//             onChange={inputeventtwo}
//             value={Lastname}
//           />
//           <br />
//           <br />
//           <input
//             style={{ width: "400px" }}
//             type="password"
//             placeholder="Enter your Password"
//             onChange={inputeventthree}
//             value={password}
//           />
//           <br />
//           <br />

//           <button type="submit">Submit Me 👍</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Forms;

// import React, { useState } from "react";
// import "./Form.css";
// const Forms = () => {
//   const [FullName, SetFullName] = useState({
//     fname: "",
//     lname: "",
//     password: "",
//     Address: "",
//   });

//   const inputevent = (event) => {
//     console.log(event.target.value);
//     // console.log(event.target.name);

//     const value = event.target.value;
//     const name = event.target.name;
//     SetFullName((prevalue) => {
//       if (name === "fname") {
//         return {
//           fname: value,
//           lname: prevalue.lname,
//           Address: prevalue.Address,
//           password: prevalue.fname,
//         };
//       }

//       if (name === "password") {
//         return {
//           fname: prevalue.fname,
//           lname: prevalue.lname,
//           Address: prevalue.Address,
//           password: value,
//         };
//       }

//       if (name === "Address") {
//         return {
//           fname: prevalue.fname,
//           lname: prevalue.lname,
//           password: prevalue.password,
//           Address: value,
//         };
//       } else {
//         if (name === "lname") {
//           return {
//             fname: prevalue.fname,
//             lname: value,
//             password: prevalue.password,
//             Address: prevalue.Address,
//           };
//         }
//       }
//     });
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     alert("form submitted");
//   };
//   return (
//     <>
//       <div className="main">
//         <form onSubmit={onSubmit}>
//           <h1>
//             Hello {FullName.fname} {FullName.lname} {FullName.password}
//             {FullName.Address}
//           </h1>

//           <input
//             style={{ width: "400px" }}
//             type="text"
//             placeholder="Enter Your name"
//             onChange={inputevent}
//             value={FullName.fname}
//             name="fname"
//           />
//           <br />
//           <br />
//           <input
//             style={{ width: "400px" }}
//             type="text"
//             placeholder="Enter your Last Name"
//             onChange={inputevent}
//             value={FullName.lname}
//             name="lname"
//           />
//           <br />
//           <br />
//           <input
//             style={{ width: "400px" }}
//             type="password"
//             placeholder="Enter your Password"
//             onChange={inputevent}
//             value={FullName.password}
//             name="password"
//           />
//           <br />
//           <br />
//           <input
//             style={{ width: "400px" }}
//             type="Address"
//             placeholder="Enter your Address"
//             onChange={inputevent}
//             value={FullName.Address}
//             name="Address"
//           />
//           <br />
//           <br />

//           <button type="submit">Submit Me 👍</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Forms;

import React, { useState } from "react";
import "./Form.css";
const Forms = () => {
  const [FullName, SetFullName] = useState({
    fname: "",
    lname: "",
    password: "",
  });

  const inputevent = (event) => {
    console.log(event.target.value);

    const { name, value } = event.target;

    SetFullName((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const onSubmit = (event) => {
    event.prevenDefault();
    alert("form submitted");
  };
  return (
    <>
      <div className="main">
        <h1>
          hello {FullName.fname}
          {FullName.lname}
        </h1>
        <p>{FullName.password}</p>
        <form onSubmit={onSubmit}>
          <input
            style={{ width: "400px" }}
            type="text"
            name="fname"
            onChange={inputevent}
            placeholder="Enter your name"
            value={FullName.fname}
          />
          <br />
          <br />
          <input
            style={{ width: "400px" }}
            type="text"
            name="lname"
            onChange={inputevent}
            placeholder="Enter your name"
            value={FullName.lname}
          />
          <br />
          <br />
          <input
            style={{ width: "400px" }}
            type="password"
            name="password"
            onChange={inputevent}
            placeholder="Enter your name"
            value={FullName.password}
          />
          <br />
          <br />
          <button type="submit">Submit Me 👍</button>
        </form>
      </div>
    </>
  );
};

export default Forms;
