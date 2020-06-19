import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Settings } from "./components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Settings />

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
