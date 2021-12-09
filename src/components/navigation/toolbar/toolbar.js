import React from "react";
import classes from "./toolbar.css";
import Logo from "../../LOGO/logo";
import NavigationItems from "../NavigationItem/NavigationItem";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div onClick={props.open} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuth = {props.isAuth}/>
      </nav>
    </header>
  );
};
export default toolbar;
