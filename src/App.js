import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="body-container">
          <Header logo={logo}></Header>
        </div>
      </header>
    </div>
  );
}

export default App;
