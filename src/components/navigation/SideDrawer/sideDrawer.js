import React from "react";
import classes from "./SideDrawer.css";
import Logo from "../../LOGO/logo";
import NavigationItems from "../NavigationItem/NavigationItem";
import BackDrop from "../../../UI/backDrop/backDrop";
import Aux from "../../../hoc/Aux";
const SideDrawer = (props) => {
  let allClasses = [classes.SideDrawer,classes.Open]
  if(props.open === false){
    allClasses = [classes.SideDrawer,classes.Close];
  }
  return (
    <Aux>
      <div className={classes.DesktopOnly} onClick= {props.closed}>
      <BackDrop show={props.open}  />
      </div>
      
      <div className={allClasses.join(' ')} onClick= {props.closed}>
     
        <Logo logoHeight="11%" />
        <nav>
          <NavigationItems isAuth = {props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};
export default SideDrawer;
