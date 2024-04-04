import React, { useEffect, useState } from "react";
import "./Covid.css";
const Covid = () => {
  const [data, setdata] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise[0]);
    setdata(actualData.statewise[0]);
  };

  useEffect(() => {
    getCovidData();
  },[]);
  return (
    <section>
      <>
        <h1>🔴Live</h1>
        <h2>Covid 19 CORONAVIRUS TRACKER</h2>
        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span className="span1"> OUR</span> COUNTRY
                </p>
                <p
                  className="card__total card__small"
                  style={{ textAlign: "center" }}
                >
                  INDIA
                </p>
              </div>
            </div>
          </li>
          <li className="card2">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span> RECOVERED
                </p>
                <p className="card__total">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card3">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span> CONFIRMED
                </p>
                <p className="card__total card__small">{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className="card4">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span> DEATH
                </p>
                <p className="card__total card__small">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card5">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span> ACTIVE
                </p>
                <p className="card__total card__small">{data.active}</p>
              </div>
            </div>
          </li>
          <li className="card6">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>LAST</span> UPDATE
                </p>
                <p className="card__total card__small">
                  {data.lastupdatedtime}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </>
    </section>
  );
};

export default Covid;
