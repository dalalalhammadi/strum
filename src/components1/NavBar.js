import React from "react";
import { NavItem, ThemeButton } from "../styles";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        WELCOME
      </a>

      <Link to="/ukulele" style={{ margin: 10, float: " right" }}>
        UkuleleList
      </Link>
      <NavItem to="/" style={{ margin: 10, float: "right" }}>
        HOME
      </NavItem>
      <ThemeButton onClick={props.toggleTheme}>
        {props.currentTheme === "light" ? "Dark" : "light"} Mode
      </ThemeButton>
    </nav>
  );
};

export default NavBar;
