import React from "react";
import "./netflix.css";
const Netflix = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" className="card-img" />
          <div className="card__info">
            <span className="card__title">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link} target="blank">
              <button>Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Netflix;
