import "./App.css";
import img from "./SPLITTER.svg";
import icon1 from "./$.svg";
import icon2 from "./Group 8.svg";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Input from "./Components/UI/Input";

function App(props) {
  const [billValue, setBillValue] = useState("");
  const [numPerson, setNumPerson] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [color, setColor] = useState(true);

  let percentage = ["5%", "10%", "15%", "25%", "50%"];
  const tipAmountValue = (billValue / numPerson / tipValue).toFixed(2);
  const totalValue = (billValue / numPerson + Number(tipAmountValue)).toFixed(
    2
  );

  const colorChangeHandler = () => {
    if (numPerson.toString().trim().length >= 0) {
      setColor(false);
    }
  };
  console.log(numPerson);
  const reloadHadler = (e) => {
    setNumPerson("");
    setTipValue("");
    setBillValue("");
    setColor(true);
  };
  return (
    <div className="app">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <h1 className="app-title">
        <img src={img} alt="logo" />
      </h1>
      <div className="splitter-card ">
        <div className="calculate-card">
          <label className="label-text">Bill</label>
          <div className="input">
            <Input
              className="bill-input"
              type="number"
              placeholder="0"
              min={0}
              value={billValue}
              onKeyDown={(e) => (e.key === "." ? e.preventDefault() : "e.key")}
              onChange={(e) => {
                setBillValue(+e.target.value);
                colorChangeHandler();
              }}
            />
            <img src={icon1} className="icon" alt="icon" />
          </div>
          <p className="label-text">Select Tip %</p>

          <div className="btns">
            {percentage.map((a, i) => (
              <button
                className={`tip-percetage ${
                  tipValue === +a.slice(0, -1) ? "tip-percetage-onclick" : ""
                }`}
                key={i}
                onClick={() => {
                  setTipValue(+a.slice(0, -1));
                  colorChangeHandler();
                }}
              >
                {a}
              </button>
            ))}
            <Input
              className="custom"
              type="number"
              placeholder="Custom"
              value={tipValue}
              min={0}
              onKeyDown={(e) => (e.key === "." ? e.preventDefault() : "e.key")}
              onChange={(e) => {
                setTipValue(+e.target.value);
                colorChangeHandler();
              }}
            />
          </div>
          <div>
            <div className="labels">
              <label className="num-text">Number of People</label>
              <label
                className={`hidden ${
                  numPerson === Number("0") ? "visible" : ""
                }`}
              >
                Can't be zero
              </label>
            </div>
            <div className="input">
              <Input
                className={`bill-input ${
                  numPerson === Number("0") ? "redBorder" : ""
                }`}
                type="number"
                placeholder="0"
                min={0}
                value={numPerson}
                onKeyDown={(e) =>
                  e.key === "." ? e.preventDefault() : "e.key"
                }
                onChange={(e) => {
                  setNumPerson(+e.target.value);
                  colorChangeHandler();
                }}
              ></Input>
              <img src={icon2} alt="logo" className="icon" />
            </div>
          </div>
        </div>
        <div className="result-card">
          <div className="result-value">
            <div className="amount-value">
              <div>
                <label className="resultCardText">Tip Amount</label>
                <p className="person">/person</p>
              </div>
              <div className="number">
                $
                {tipAmountValue === "NaN" || tipAmountValue === "Infinity"
                  ? "0.00"
                  : tipAmountValue}
              </div>
            </div>
            <div className="total-value">
              <div>
                <p className="resultCardText">Total</p>
                <p className="person">/person</p>
              </div>
              <div className="number">
                $
                {totalValue === "NaN" || totalValue === "Infinity"
                  ? "0.00"
                  : totalValue}
              </div>
            </div>
          </div>
          <button
            className={`resetBtn ${!color ? "reset-btn-active" : ""}`}
            onClick={reloadHadler}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
