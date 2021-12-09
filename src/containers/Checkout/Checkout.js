import React, { Component } from "react";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import ContactData from "./contactData/contactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  // componentWillMount() {
  //   axios
  //     .get("/orders.json")
  //     .then((response) => {
  //       let a  = Object.values(response.data).length;
  //       console.log(Object.values(response.data)[a-1].ingredients);
  //       this.setState({ ingredient: Object.values(response.data)[a-1].ingredients });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // componentWillMount() {

  //   const query = new URLSearchParams(this.props.location.search);
  //   console.log(query);
  //   let ingredient = {};
  //   for (let param of query.entries()) {
  //     if(param[0] === "price"){
  //       this.setState({price : param[1]})
  //     }else{
  //       ingredient[param[0]] = +param[1];
  //     }

  //   }
  //   console.log(ingredient);
  //   this.setState({ ingredients: ingredient });

  // }
  checkoutCanceledHndler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHndler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    let summary = <Redirect to="/"></Redirect>;
    if (this.props.ing) {
      
      summary = (
       
        <div>
           {this.props.purchased ? <Redirect to="/"></Redirect> : null }
          <CheckoutSummary
            ingredient={this.props.ing}
            checkoutCanceled={this.checkoutCanceledHndler}
            checkoutContinued={this.checkoutContinuedHndler}
          ></CheckoutSummary>
          <Route
            path="/checkout/contact-data"
            render={() => (
              <ContactData
                ingredient={this.props.ing}
                price={this.props.price}
                {...this.props}
              />
            )}
          />
        </div>
      );
    }
    return summary ;
  }
}
const stateToProps = (state) => {
  return {
    ing: state.burger.ingredients,
    price: state.burger.price,
    purchased : state.order.purchased

  };
};

export default connect(stateToProps, null)(Checkout);
