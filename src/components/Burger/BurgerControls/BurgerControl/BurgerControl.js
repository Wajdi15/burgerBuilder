import React from "react";
import classes from "./BurgerControl.css";

const burgerControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.removed} disabled={props.disable}>
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};
export default burgerControl;
