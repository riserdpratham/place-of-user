import React from "react";

import "./Input.css";

const Input = (props) => {
  const inputElem = (
    <input id={props.id} type={props.type} placeholder={props.placeholder} />
  );

  const textArea = <textarea id={props.id} rows={props.rows || 3} />;
  const element = props.element === "input" ? inputElem : textArea;
  return (
    <div className={`form-control ${props.formClass}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
