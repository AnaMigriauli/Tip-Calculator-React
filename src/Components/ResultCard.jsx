import "./ResultCard.css";
const ResultCard = (props) => {
  return (
    <div className="result-card">
      <div className="result-value">
        <div className="amount-value">
          <div>
            <label className="resultCardText">Tip Amount</label>
            <p className="person">/person</p>
          </div>
          <div
            className={`number ${
              props.tipAmountValue.length >= 7 ? "number1" : ""
            }`}
          >
            $
            {props.tipAmountValue === "NaN" ||
            props.tipAmountValue === "Infinity"
              ? "0.00"
              : props.tipAmountValue}
          </div>
        </div>
        <div className="total-value">
          <div>
            <p className="resultCardText">Total</p>
            <p className="person">/person</p>
          </div>
          <div
            className={`number ${
              props.totalValue.length >= 7 ? "number1" : ""
            }`}
          >
            $
            {props.totalValue === "NaN" || props.totalValue === "Infinity"
              ? "0.00"
              : props.totalValue}
          </div>
        </div>
      </div>
      <button
        className={`resetBtn ${!props.color ? "reset-btn-active" : ""}`}
        onClick={props.reloadHadler}
      >
        RESET
      </button>
    </div>
  );
};
export default ResultCard;
