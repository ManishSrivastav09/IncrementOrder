// import React, { useEffect, useState } from "react";

// const Covid = () => {
//   const [data, setdata] = useState([]);

//   const getCovidData = async () => {
//     const res = await fetch("https://data.covid19india.org/data.json");
//     const actualData = await res.json([0]);
//     setdata(actualData.statewise[0]);
//     console.log(actualData.statewise[0]);
//   };

//   useEffect(() => {
//     getCovidData();
//   }, []);
//   return (
//     <>
//       <h6>🔴live</h6>
//       <h3>Covid-19 CORONAVIRUS TRACKER</h3>
//       <ul>
//         <li className="card">
//           <div className="card__main">
//             <div className="card__inner">
//               <p className="card__name">
//                 <span>Our</span> Country
//               </p>
//               <p className="card__total__small">INDIA</p>
//             </div>
//           </div>
//         </li>
//         <li className="card">
//           <div className="card__main">
//             <div className="card__inner">
//               <p className="card__name">
//                 <span>Total</span>RECOVERED
//               </p>
//               <p className="card__total__small">{data.recovered}</p>
//             </div>
//           </div>
//         </li>
//         <li className="card">
//           <div className="card__main">
//             <div className="card__inner">
//               <p className="card__name">
//                 <span>TOTAL</span> CONFIRMED
//               </p>
//               <p className="card__total__small">{data.confirmed}</p>
//             </div>
//           </div>
//         </li>
//         <li className="card">
//           <div className="card__main">
//             <div className="card__inner">
//               <p className="card__name">
//                 <span>Our</span>DEATH
//               </p>
//               <p className="card__total__small">{data.deaths}</p>
//             </div>
//           </div>
//         </li>
//         <li className="card">
//           <div className="card__main">
//             <div className="card__inner">
//               <p className="card__name">
//                 <span>TOTAL</span>ACTIVE
//               </p>
//               <p className="card__total__small">{data.active}</p>
//             </div>
//           </div>
//         </li>
//         <li className="card">
//           <div className="card__main">
//             <div className="card__inner">
//               <p className="card__name">
//                 <span>LAST</span>UPDATED
//               </p>
//               <p className="card__total__small">{data.lastupdatedtime}</p>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default Covid;

