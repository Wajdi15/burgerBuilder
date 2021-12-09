import React , {Component} from "react";
import classes from "./modal.css";
import Aux from "../../hoc/Aux"
import BackDrop from "../backDrop/backDrop"


class Modal extends  Component {
//improve performance
  shouldComponentUpdate(nextProps,nextState){
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render(){
    return(
      <Aux>
    <BackDrop show={this.props.show} clicked={this.props.click}></BackDrop>
   <div className={classes.Modal}
 style={{
     transform : this.props.show ? 'translateX(0)':'translateY(-100vh)',
     opacity : this.props.show ? '1' : '0'
 }}>
  {this.props.children}
</div>
</Aux>
    )
  }
}

 

export default Modal;
