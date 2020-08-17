import React from "react";
import "./Calculator.css";

class App extends React.Component {
  render() {
    return (
      <div className="all">
        <div className="result">
          <input type="text" name="result" placeholder="0" value={this.props.result} />
        </div>
        <div>
          <button name="(" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            (
          </button>
          <button name="CE" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            CE
          </button>
          <button name=")" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            )
          </button>
          <button name="C" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            C
          </button>
        </div>
        <div>
          <button name="1" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            1
          </button>
          <button name="2" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            2
          </button>
          <button name="3" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            3
          </button>
          <button name="+" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            +
          </button>
        </div>
        <div>
          <button name="4" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            4
          </button>
          <button name="5" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            5
          </button>
          <button name="6" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            6
          </button>
          <button name="-" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            -
          </button>
        </div>
        <div>
          <button name="7" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            7
          </button>
          <button name="8" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            8
          </button>
          <button name="9" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            9
          </button>
          <button name="x" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            x
          </button>
        </div>
        <div>
          <button name="." className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            .
          </button>
          <button name="0" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            0
          </button>
          <button name="=" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            =
          </button>
          <button name="÷" className="allbutton" onClick={e => this.props.buttonClick(e.target.name)}>
            ÷
          </button>
        </div>
      </div>
    );
  }
}

export default App;
