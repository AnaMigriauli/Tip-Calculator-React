import { Fragment } from "react";
import Input from "./UI/Input";
import icon1 from "../$.svg";
import icon2 from "../Group 8.svg";
import "./CalculateCard.css";
const CalculateCard = (props) => {
  return (
    <Fragment>
      <div className="calculate-card">
        <label className="bill-lable">Bill</label>
        <div className="input">
          <Input
            className="bill-input"
            type="number"
            placeholder="0"
            min={0}
            value={props.billValue}
            onKeyDown={(e) => (e.key === "." ? e.preventDefault() : "e.key")}
            onChange={(e) => {
              if (e.target.value.length < 7) {
                props.setBillValue(e.target.value);
                props.colorChangeHandler();
              }
            }}
          />
          <img src={icon1} className="icon" alt="icon" />
        </div>
        <p className="tip-lable">Select Tip %</p>

        <div className="btns">
          {props.percentage.map((a, i) => (
            <button
              className={`tip-percetage ${
                props.tipValue === a.slice(0, -1) ? "tip-percetage-onclick" : ""
              }`}
              key={i}
              onClick={() => {
                props.setTipValue(a.slice(0, -1));
                props.colorChangeHandler();
              }}
            >
              {a}
            </button>
          ))}
          <Input
            className="custom"
            type="number"
            placeholder="Custom"
            value={props.tipValue}
            min={0}
            onKeyDown={(e) => (e.key === "." ? e.preventDefault() : "e.key")}
            onChange={(e) => {
              if (e.target.value.length < 4) {
                props.setTipValue(e.target.value);
                props.colorChangeHandler();
              }
            }}
          />
        </div>
        <div>
          <div className="labels">
            <label className="num-text">Number of People</label>
            <label
              className={`hidden ${props.numPerson === "0" ? "visible" : ""}`}
            >
              Can't be zero
            </label>
          </div>
          <div className="input">
            <Input
              className={`bill-input ${
                props.numPerson === "0" ? "redBorder" : ""
              }`}
              type="number"
              placeholder="0"
              min={0}
              value={props.numPerson}
              onKeyDown={(e) => (e.key === "." ? e.preventDefault() : "e.key")}
              onChange={(e) => {
                if (e.target.value.length < 8) {
                  props.setNumPerson(e.target.value);
                  props.colorChangeHandler();
                }
              }}
            />
            <img src={icon2} alt="logo" className="icon" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CalculateCard;
