import React from "react";
import classes from "./input.css";
const Input = (props) => {
  let inputElement = null;
 let  inputClasses = [classes.InputElement]
  if(props.inValid && props.touched){
    inputClasses.push(classes.Invalid)
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
          {...props.elementConfig}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          value={props.value}
          onChange={props.changed}
          {...props.elementConfig}
        />
      );
      break;
    case "select":
      let options = [];
      for (let config of props.elementConfig.options) {
        options.push(
          <option value={config.value} key={config.value}>
            {config.displayValue}
          </option>
        );
      }
      inputElement = (
        <select className={classes.InputElement} onChange={props.changed}>
          {options}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.changed}
          className={classes.InputElement}
          value={props.value}
          {...props.elementConfig}
        />
      );
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Lable}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default Input;
