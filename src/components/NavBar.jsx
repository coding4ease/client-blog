import React, { Component } from "react";
import NavButton from "./NavButton";

function NavBar(props) {
  return (
    <div class="nav-bar">
      <NavButton name="HOME" />
      <NavButton name="RECIPES" />
      <NavButton name="ABOUT" />
      <NavButton name="CONTACT" />
    </div>
  );
}

export default NavBar;
