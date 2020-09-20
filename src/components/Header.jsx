import React, { Component } from "react";

function Header({ logo }) {
  return (
    <div class="header">
      <img src={logo} className="App-logo" alt="Logo" />
      <h1>
        <span>Manjuz Kitchen</span>
      </h1>
      <h3>
        <span>- Cooking and Travel Blog</span>
      </h3>
    </div>
  );
}

export default Header;
