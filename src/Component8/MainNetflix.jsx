import React from "react";
import Netflix from "./Netflix";
import Sdata from "./Sdata";
import "./netflix.css";

const favSeries = "netflix";
const FavS = () => {
  if (favSeries === "netflix") {
    return (
      <Netflix
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
      />
    );
  } else {
    return (
      <Netflix
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        link={Sdata[3].link}  
      />
    );
  }
};
const MainNetflix = () => {
  return (
    <>
      <h1 className="heading bg-bg-success">List of top 5 Netflix of 2023</h1>
      <FavS />
      {/* {(favSeries==='netflix')?<Netflix/>:<amazone/>} */}
    </>
  );
};

export default MainNetflix;
