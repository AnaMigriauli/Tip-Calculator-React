// import React, { useState } from "react";
// import Input from "./UI/Input";

// const CalculateCard = (props) => {
//   // const [percentValue, setPersentValue] = useState("");
//   const [billValue, setBillValue] = useState("");
//   const [numPerson, setNumPerson] = useState("");
//   let percentage = ["5%", "10%", "15%", "25%", "50%"];

//   // let aHandler = (e) => {
//   //   setPersentValue(e.target.textContent.slice(0, -1));
//   // };
//   // console.log
//   return (
//     <div className="calculate-card">
//       <div>
//         <label>Bill</label>
//         <input
//           value={billValue}
//           onChange={(e) => setBillValue(e.target.value)}
//         ></input>
//       </div>

//       <p>Select Tip %</p>
//       <div>
//         {percentage.map((a, i) => (
//           <button key={i}>{a}</button>
//         ))}
//         <input className="custom" placeholder="Custom" />
//       </div>
//       <div>
//         <label>Number of People</label>
//         <input
//           value={numPerson}
//           onChange={(e) => setNumPerson(e.target.value)}
//         ></input>
//       </div>
//       {/* <Input>{"Number of People"}</Input> */}
//     </div>
//   );
// };

// export default CalculateCard;
