import React from "react";
import BurgerControl from "./BurgerControl/BurgerControl";
import classes from "./BurgerControls.css";
const burgerControls = (props) => {
  const ctrls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];
  return (
    <div className={classes.BuildControls}>
      <p>Current price :  <strong>{props.price.toFixed(2)}</strong></p>
      {ctrls.map((ctrl) => {
        return (
          <BurgerControl
            label={ctrl.label}
            key={ctrl.label}
            added={() => props.add(ctrl.type)}
            removed={() => props.remove(ctrl.type)}
            disable = {props.disabled[ctrl.type]}
          />
        );
      })}
    <button className={classes.OrderButton} disabled = {props.purchasable} onClick={props.click}>ORDER NOW</button>
    </div>
    
  );
};

export default burgerControls;
