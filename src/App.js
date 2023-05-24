import React, { useState } from "react";
import "./App.css";
import img from "./SPLITTER.svg";
import ResultCard from "./Components/ResultCard";
import CalculateCard from "./Components/CalculateCard";

let percentage = ["5%", "10%", "15%", "25%", "50%"];

function App(props) {
  const [billValue, setBillValue] = useState("");
  const [numPerson, setNumPerson] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [color, setColor] = useState(true);

  const tipAmountValue = (billValue / numPerson / tipValue).toFixed(2);
  const totalValue = (billValue / numPerson + Number(tipAmountValue)).toFixed(
    2
  );
  const colorChangeHandler = () => {
    if (numPerson.toString().trim().length >= 0) {
      setColor(false);
    }
  };

  const reloadHadler = () => {
    setNumPerson("");
    setTipValue("");
    setBillValue("");
    setColor(true);
  };

  return (
    <div className="app">
      <h1 className="app-title">
        <img src={img} alt="logo" />
      </h1>
      <div className="splitter-card ">
        <CalculateCard
          billValue={billValue}
          setBillValue={setBillValue}
          colorChangeHandler={colorChangeHandler}
          percentage={percentage}
          tipValue={tipValue}
          setTipValue={setTipValue}
          numPerson={numPerson}
          setNumPerson={setNumPerson}
        />
        <ResultCard
          reloadHadler={reloadHadler}
          totalValue={totalValue}
          tipAmountValue={tipAmountValue}
          color={color}
        />
      </div>
    </div>
  );
}

export default App;
