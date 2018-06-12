import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const PUBLIC_URL = process.env.PUBLIC_URL || "";

class App extends Component {
  state = {
    testResponse: "Waiting for response..."
  };
  async componentDidMount() {
    const response = await fetch(PUBLIC_URL + "/api/test");
    const message = await response.json();
    this.setState({
      testResponse: message
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Example React &amp; Express App</h1>
        </header>
        <p className="App-intro">
          Testing response from server: <code>{this.state.testResponse}</code>
        </p>
      </div>
    );
  }
}

export default App;
