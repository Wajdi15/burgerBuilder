import axios from "../../axiosOrders";
import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/order";
import Order from "../../components/order/order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"

class Orders extends Component {
componentDidMount(){
  this.props.fetchOrders(this.props.token,this.props.id)
}
  render() {
      let orders = Object.keys(this.props.orders).map((order,index) =>{
         return <Order ingredients = {this.props.orders[order].ingredients} price={this.props.orders[order].price} key={index} ></Order>
      })
    return (
      <div>
      {orders}
      </div>
    );
  }
}
const stateToProps = (state)=>{
  return {
    token : state.auth.idToken,
    id : state.auth.userId,
    orders : state.order.orders
  }
}
const dispatchToProps = (dispatch) => {
  return {
    fetchOrders : (token,id) => { dispatch (actions.fetchOrders(token,id))
    }
  }
}
export default connect(stateToProps,dispatchToProps)(withErrorHandler(Orders,axios));
