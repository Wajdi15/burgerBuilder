import React, { Component } from "react";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Button from "../../../UI/Button/button";
import classes from "./contactData.css";
import axios from "../../../axiosOrders";
import Spinner from "../../../UI/Spinner/spinner";
import Input from "../../../UI/iNPUT/input";
import {purshaseBurgeStart}from "../../../store/actions/index"
class ContactData extends Component {
  state = {
    check : true,
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "yourName",
        },
        value: "",
        validation : {
          required : true,
          maxLength : 12,
          minLength : 3
        },
        valid : false,
        touched : false,
      },

      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation : {
          required : true,
          maxLength : 12,
          minLength : 5
        },
        valid : false,
        touched : false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP",
        },
        value: "",
        validation : {
          required : true,
          maxLength : 4,
          minLength : 4
        },
        valid : false,
        touched : false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation : {
          required : true,
          maxLength : 12,
          minLength : 3
        },
        valid : false,
    
      },

      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validation : {
          required : true,
        },
        valid : false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fast", displayValue: "Fast" },
            { value: "slow", displayValue: "Slow" },
          ],
        }, validation : {
          required : true,
        },
        value: "fast",
        valid : true,
      },
    },

    spinner: false,
  };
  validationHandler = (value,rules) => {
    let isValid = true;
    if(rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }
  inputChangedHandler = (event,inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.validationHandler(event.target.value,updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm : updatedOrderForm});
  }
  orderHandler = (event) => {
    event.preventDefault();
    let validation = true
    const formData = {}
    for(let dataType in this.state.orderForm){
      formData[dataType] = this.state.orderForm[dataType].value;
      validation =  validation === this.state.orderForm[dataType].valid
    }
    this.setState({ check: validation});
    if(validation){
      const order = {
        ingredients: this.props.ingredient,
        price: this.props.price,
        orderData : formData,
        id : this.props.id
      };
      this.props.purshaseBurge(order,this.props.token)
      
  
  }};
  render() {
    let form = (
      <form onSubmit={(event) => this.orderHandler(event)}>
        {Object.keys(this.state.orderForm).map((fromElements, index) => {
          return (
            <Input
              key={fromElements}
              elementType={this.state.orderForm[fromElements].elementType}
              elementConfig={this.state.orderForm[fromElements].elementConfig}
              defaultValue={this.state.orderForm[fromElements].value}
              touched = {this.state.orderForm[fromElements].touched}
              inValid = {!this.state.orderForm[fromElements].valid}
              changed = {(event)=> this.inputChangedHandler(event,fromElements) }

            />
          );
        })}
        <Button btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner></Spinner>;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
        {!this.state.check ? <p style={{color : 'red'}}> Make sure that you put the right data</p> : null}
      </div>
    );
  }
}
const stateToProps = (state)=>{
  return {
    loading : state.order.loading,
    token : state.auth.idToken,
    id : state.auth.userId
  }
}
const dispatchToProps = (dispatch) =>{
 return {
  purshaseBurge : (order,token)=> {
    dispatch(purshaseBurgeStart(order,token))
  } 
 }
}
export default connect(stateToProps,dispatchToProps)(withErrorHandler(ContactData,axios));