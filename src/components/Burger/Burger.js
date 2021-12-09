
import React from 'react';
import classes from './Burger.css'
import BurgerIngrediant from './BurgerIngrediant/BurgerIngredient'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredient)//change the keys object to array
    .map(igKey => {
        
        return [...Array(props.ingredient[igKey])].map((_,i) => {
            return <BurgerIngrediant type={igKey} key={igKey + "_"+i} ></BurgerIngrediant>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])
   if(transformedIngredients.length === 0 ){
       transformedIngredients = <p>Please start add elements</p>
   }
    return(
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top" ></BurgerIngrediant>
            {transformedIngredients}
            
            <BurgerIngrediant type="bread-bottom" ></BurgerIngrediant>
        </div>
    )
}
export default burger