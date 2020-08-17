import React, { createRef, useState } from "react";
import CalculatorComponent from "./Components/CalculatorComponent";
import "./App.css";

class App extends React.Component {
  state = {
    result: "",
  };

  buttonClick = (button) => {
    if (button == "C") {
      this.setState({
        result: "",
      });
    } else if (button == "CE") {
      this.setState({
        result: this.state.result.slice(0, -1),
      });
    } else if (button == "=") {
      this.evaluate();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  evaluate = () => {
    let finalResult = "";
    if (this.state.result.includes("x")) {
      finalResult = this.state.result.replace("x", "*");
    } else if (this.state.result.includes("÷")) {
      finalResult = this.state.result.replace("÷", "/");
    } else {
      finalResult = this.state.result;
    }
    try {
      this.setState({
        result: (eval(finalResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: finalResult,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Fantastic Calculator</h1>
        <CalculatorComponent
          result={this.state.result}
          buttonClick={this.buttonClick}
        />
      </div>
    );
  }
}
export default App;
