import React, { Component } from "react";
import "./App.css";
import Card from "./component/card/Card";
//import Person from "./";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card />
          {/* <Person /> */}
        </header>
      </div>
    );
  }
}

export default App;
