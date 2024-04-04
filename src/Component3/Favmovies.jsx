import React, { useState } from "react";
import Item from "./Item";
import Container from "./Container";
import NameInput from "./NameInputs";

const Favmovies = () => {
  const favname = [
    "Manish",
    "Kishan",
    "Shivam",
    "Anup",
    "Manoj",
    "Ashish",
    "Rinku",
    "Muskan",
  ];
  const [name, setName] = useState("changing name");

  const Chgane = (event) => {
    console.log(event.target.value);
    setName(name);
  };

  return (
    <>
      <Container id="name">
        <ul className="list-group"> 
          <h5 style={{ color: "brown" }}>My Favourate Friends</h5>
          <NameInput handleOnChange={Chgane} />
          {name}

          <div id="favname">
            {favname.map((setitem) => {
              return <Item key={setitem} favname={setitem} />;
            })}
          </div>
        </ul>
      </Container>
    </>
  );
};

export default Favmovies;
