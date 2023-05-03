import React, { useState } from "react";
import "./Input.css";
const Input = (props) => {
  const [isFocused, setIsFocused] = useState(true);

  return (
    <input
      className={` bill-input-common ${props.className} ${
        !isFocused ? "input-border" : ""
      } `}
      type={props.type}
      value={props.value}
      min={props.min}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      onFocus={() => setIsFocused(false)}
      onBlur={() => setIsFocused(true)}
    ></input>
  );
};

export default Input;
