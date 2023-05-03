// import { useState } from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button className={props.className} key={props.key} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
