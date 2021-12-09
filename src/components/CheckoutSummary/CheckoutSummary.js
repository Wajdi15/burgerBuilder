import React ,{Component} from 'react';
import Burger from '../Burger/Burger';
import Button from '../../UI/Button/button';
import classes from './CheckoutSummary.css';
class CheckoutSummary extends Component {
    render(){
        return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it taste well !!!</h1>
            <div style={{width:'100%',margin:'auto'}}> 
            <Burger ingredient={this.props.ingredient}></Burger>
            <Button btnType ='Danger' clicked = {this.props.checkoutCanceled}>Cancel</Button>
            <Button btnType ='Success' clicked = {this.props.checkoutContinued}>Continue</Button>
            </div>
        </div>
        )
    }
}
export default CheckoutSummary;