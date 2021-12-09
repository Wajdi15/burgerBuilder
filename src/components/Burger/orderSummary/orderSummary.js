import React from "react";
import Button from "../../../UI/Button/button";


const orderSummary = (props) => {
  return (
    <div>
      <h2>Your Order</h2>
      <p> A delicious burger with the following ingredients :</p>
      <ul>
        {Object.keys(props.ingredients).map((ing) => {
          return (
            <li key={ing} style={{textTransform : 'capitalize'}}>
              {ing} : {props.ingredients[ing]}
            </li>
          );
        })}
      </ul>
      <p><strong>Total Price : {props.price.toFixed(2)} $</strong></p>
      <p>Continue to Checkout ?</p>
      <Button btnType="Danger" clicked = {props.cancel}>Cancel</Button>
      <Button btnType="Success" clicked = {props.continue}>Continue</Button>
    </div>
  );
};
export default orderSummary;
