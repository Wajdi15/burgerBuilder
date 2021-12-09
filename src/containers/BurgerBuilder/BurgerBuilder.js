import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import axios from "../../axiosOrders";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button/button";
import * as actions from "../../store/actions/index";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../UI/modal/modal";
import OrderSummary from "../../components/Burger/orderSummary/orderSummary";
import Spinner from "../../UI/Spinner/spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
// ADD export an the containers to test it
export class BurgerBuilder extends Component {
  state = {
    orderSummary: false,
    spinner: false,

    checkout: false,
  };
  componentDidMount() {
    this.props.get();
  }

  orderSummaryHandler = () => {
    this.setState({ orderSummary: !this.state.orderSummary });
  };
  continue = () => {
    this.props.purchased();
    this.props.history.push({
      pathname: "/checkout",
    });
  };

  render() {
    let disabledInfo = { ...this.props.ing };
    for (let info in disabledInfo) {
      disabledInfo[info] = disabledInfo[info] <= 0;
    }
    let order = (
      <div>
        {" "}
        <p>*** login first ***</p>{" "}
        <NavLink to="/auth">
          <Button btnType="Success" clicked={this.props.continuePurchase}>Auth</Button>
        </NavLink>
      </div>
    );
    let burger = this.props.error ? <p>Something wrong</p> : <Spinner />;
    if (this.props.ing) {
      burger = (
        <Aux>
          <Burger ingredient={this.props.ing} />

          <BurgerControls
            add={this.props.add}
            remove={this.props.remove}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.props.purchasable}
            click={this.orderSummaryHandler}
          />
        </Aux>
      );
      if (this.props.auth) {
        order = (
          <OrderSummary
            ingredients={this.props.ing}
            cancel={this.orderSummaryHandler}
            continue={this.continue}
            price={this.props.price}
          />
        );
      }
    }

    if (this.state.spinner) {
      order = <Spinner></Spinner>;
    }
    return (
      <Aux>
        <Modal show={this.state.orderSummary}>{order}</Modal>
        {burger}
      </Aux>
    );
  }
}
const stateToProps = (state) => {
  return {
    ing: state.burger.ingredients,
    purchasable: state.burger.purchasable,
    price: state.burger.price,
    error: state.burger.error,
    auth: state.auth.idToken,

  };
};
const dispatchToProps = (dispatch) => {
  return {
    add: (ingType) => dispatch(actions.addIngredients(ingType)),
    remove: (ingType) => dispatch(actions.removeIngredients(ingType)),
    get: () => dispatch(actions.getIngredients()),
    purchased: () => dispatch(actions.purchaseBurgerInit()),
    continuePurchase : () => dispatch (actions.countinueYourPurchase())
  };
};
export default connect(
  stateToProps,
  dispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
