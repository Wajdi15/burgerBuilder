import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../UI/iNPUT/input";
import Button from "../../UI/Button/button";
import Spinner from "../../UI/Spinner/spinner";
import classes from "./auth.css";
import * as actions from "../../store/actions/index";
import { Redirect } from "react-router";

class Auth extends Component {
  state = {
    authForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "your Email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "your Password",
        },
        value: "",
        validation: {
          minLength: 8,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  };
  validationHandler = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedAuth = {
      ...this.state.authForm,
    };
    const updatedFormElement = {
      ...updatedAuth[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.validationHandler(
      event.target.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedAuth[inputIdentifier] = updatedFormElement;
    this.setState({ authForm: updatedAuth });
  };
  authHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.authForm.email.value,
      this.state.authForm.password.value,
      this.state.isSignup
    );
  };
  signupHandler = () => {
    this.setState((prevState) => {
      return { isSignup: !prevState.isSignup };

    });
  };
  render() {
    let form = (
      <form onSubmit={(event) => this.authHandler(event)}>
        {Object.keys(this.state.authForm).map((fromElements, index) => {
          return (
            <Input
              key={fromElements}
              elementType={this.state.authForm[fromElements].elementType}
              elementConfig={this.state.authForm[fromElements].elementConfig}
              defaultValue={this.state.authForm[fromElements].value}
              touched={this.state.authForm[fromElements].touched}
              inValid={!this.state.authForm[fromElements].valid}
              changed={(event) => this.inputChangedHandler(event, fromElements)}
            />
          );
        })}
        <Button btnType="Success">
          {this.state.isSignup ? "SIGNUP" : "SIGNIN"}
          
        </Button>
      </form>
    );
    if(this.props.loading){
      form = <Spinner/>;
    }
    let redirect = null;

    if(this.props.auth){
      if(this.props.continuePurchase){
        redirect = <Redirect to="/checkout"/>
      }else{
        redirect = <Redirect to="/"/>
      }
      
    }
    return (
      <div className={classes.Auth}>
        {redirect}
            {form}
            <Button btnType="Danger" clicked={this.signupHandler}>
              {this.state.isSignup ? "SIGNIN" : "SIGNUP"}
            </Button>
            {this.props.error ? <p>{this.props.error.message}</p> : null}
          </div>

    );
  }
  
}
const stateToPrpos = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    auth : state.auth.idToken,
    continuePurchase : state.burger.continuePurchase,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) => {
      dispatch(actions.auth(email, password, isSignup));
    },
  };
};
export default connect(stateToPrpos, dispatchToProps)(Auth);
