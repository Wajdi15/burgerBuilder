import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Logout from "./containers/Auth/logout/logout";
import asyncComponent from "./hoc/asyncComponent";

const asyncCheckout = asyncComponent(() => {
  return import("./containers/Checkout/Checkout");
});

const asyncOrders = asyncComponent(() => {
  return import("./containers/order/orders");
});

const asyncAuth = asyncComponent(() => {
  return import("./containers/Auth/auth");
});

class App extends Component {
  componentDidMount() {
    this.props.authCheckState();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              {this.props.isAuth ? (
                <Route path="/checkout" component={asyncCheckout}></Route>
              ) : null}
              {this.props.isAuth ? (
                <Route path="/orders" component={asyncOrders}></Route>
              ) : null}
              <Route path="/auth" component={asyncAuth}></Route>
              <Route path="/logout" component={Logout}></Route>
              <Route path="/" exact component={BurgerBuilder}></Route>
              <Route path="/404" render={()=> <h1>Page Not Found</h1>} />
              <Redirect to="/404" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
const stateToProps = (state) => {
  return {
    isAuth: state.auth.idToken !== null,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    authCheckState: () => dispatch(actions.authCheckState()),
  };
};
export default connect(stateToProps, dispatchToProps)(App);
