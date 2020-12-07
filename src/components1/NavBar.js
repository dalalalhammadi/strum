import React from "react";
import { NavItem, ThemeButton } from "../styles";
import { Link } from "react-router-dom";
import SignupButton from "./buttons/SignupButton";

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        WELCOME
      </a>

      <Link to="/ukulele" style={{ margin: 10, float: " right" }}>
        UkuleleList
      </Link>
      <NavItem to="/music" style={{ margin: 10, float: "right" }}>
        Music
      </NavItem>
      <NavItem to="/" style={{ margin: 10, float: "right" }}>
        HOME
      </NavItem>
      <SignupButton />
      <ThemeButton onClick={props.toggleTheme}>
        {props.currentTheme === "light" ? "Dark" : "light"} Mode
      </ThemeButton>
    </nav>
  );
};

export default NavBar;
