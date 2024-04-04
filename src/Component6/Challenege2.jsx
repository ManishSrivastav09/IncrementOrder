import React from "react";

const Challenege2 = () => {
  const Name = "manish sriavstav";
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const img1="https://picsum.photos/210/300"
  const img2="https://picsum.photos/230/300"
  const img3="https://picsum.photos/249/300"
  const img4="https://picsum.photos/220/300"
  const img5="https://picsum.photos/219/300"
  const img6="https://picsum.photos/211/300"
  return (
    <>
      <h1 contentEditable> {` Hello, My name is ${Name}`}</h1>
      <p>{` today Date is ${date}`}</p>
      <h5>{` current time is ${time}`}</h5>
      <img src={img1} alt="randomImages" />
      <img src={img2} alt="randomImages" />
      <img src={img3} alt="randomImages" />
      <img src={img4} alt="randomImages" />
      <img src={img5} alt="randomImages" />
      <img src={img5} alt="randomImages" />
    </>
  );
};

export default Challenege2;
