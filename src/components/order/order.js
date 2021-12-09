import React from "react";
import classes from "./order.css";
const order = (prpos) => {
    let ingredient = [];
    for(let ingredientName in prpos.ingredients){
        ingredient.push({name:ingredientName,amount:prpos.ingredients[ingredientName]});
    }
    const ingredientOutput = ingredient.map((ing , index)=> {
        return (<p key={index} style={{
            textTransform : 'capitalize',
            display : 'inline-block',
            margin : '0 8px',
            border : '1px solid #ccc',
            padding : '5px'

        }}>{ing.name} : {ing.amount}</p>)
    })
    return (
        <div className={classes.Order}>
            {ingredientOutput}
            <p>Price :  <strong>{Number.parseFloat(prpos.price).toFixed(2)}</strong>$</p>
        </div>
    )
}
export default order;