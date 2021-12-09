import React from 'react';
import classes from './logo.css'
import pic from '..//..//assets/images/burger-logo.png';
const logo = (props) =>{
    return <div className={classes.Logo} style={{height : props.logoHeight}} > <img src={pic} alt="logo"></img></div> 
}
export default logo