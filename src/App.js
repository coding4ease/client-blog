import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Body from "./containers/Body";
import User from "./containers/User";
import Post from "./containers/Post";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="data-container">
          <Header logo={logo}></Header>
        </div>
      </header>
      <Body />
    </div>
  );
}

export default App;
