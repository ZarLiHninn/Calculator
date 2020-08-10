import React, {createRef,useState} from 'react';



class App extends React.Component {
      
      constructor(props){
        super(props)
        this.state = { firstNum: '', secondNum: '', result: '' }
      }
      
      add(){
        console.log("First Number: ", this.state.firstNum, " - SecondNumber: ", this.state.secondNum)
        this.setState({ result: parseInt(this.state.firstNum) + parseInt(this.state.secondNum) })
        console.log(this.state)
      }
      subtract(){
        console.log("First Number: ", this.state.firstNum, " - SecondNumber: ", this.state.secondNum)
        this.setState({ result: parseInt(this.state.firstNum) - parseInt(this.state.secondNum) })
        console.log(this.state)
      }
      multiply(){
        console.log("First Number: ", this.state.firstNum, " - SecondNumber: ", this.state.secondNum)
        this.setState({ result: parseInt(this.state.firstNum) * parseInt(this.state.secondNum) })
        console.log(this.state)
      }
      divide(){
        console.log("First Number: ", this.state.firstNum, " - SecondNumber: ", this.state.secondNum)
        this.setState({ result: parseInt(this.state.firstNum) / parseInt(this.state.secondNum) })
        console.log(this.state)
      }
      render() {
        return(
          <div>
            <h1>Add Two Numbers</h1>
     
            <input type="text" className="inputStyle" value={this.state.firstNum} onChange={ (eve) => { this.setState({ firstNum: eve.target.value }) } }/>
            <br/><br/>
     
            <input type="text" className="inputStyle" value={this.state.secondNum} onChange={ (eve) => { this.setState({ secondNum: eve.target.value })} } />
            <br/><br/>
     
            <button onClick={()=>{this.add()}} >+</button>
            <button onClick={()=>{this.subtract()}} >-</button>
            <button onClick={()=>{this.multiply()}} >*</button>
            <button onClick={()=>{this.divide()}} >/</button>
            <br/><br/>
     
            <input type="text" value={this.state.result} />
     
            <br/><br/>
          </div>
        )
      }
      }

export default App;