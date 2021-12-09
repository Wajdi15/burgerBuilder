import React, { Component } from "react";
import {connect} from  "react-redux";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../navigation/toolbar/toolbar";
import SideDrawer from "../navigation/SideDrawer/sideDrawer";
class Layout extends Component {
    state = {
        showSideDraw : false
    }
    SideDrawerHandler=() =>{
        this.setState({
            showSideDraw : !this.state.showSideDraw
        })
    }
  render() {
    return (
      <Aux>
        <SideDrawer open={this.state.showSideDraw} closed={this.SideDrawerHandler} isAuth={this.props.isAuth } />
        <Toolbar open={this.SideDrawerHandler} isAuth={this.props.isAuth  }/>
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}
const stateToProps = (state)=>{
  return {
    isAuth : state.auth.idToken !== null
  }
}
export default connect(stateToProps)(Layout);
