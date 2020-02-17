import React, {Component} from 'react';
import './App.css';
import {Button} from './Components/Button';
import {Input} from './Components/Input';
import {ClearButton} from './Components/ClearButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  concatenateInput = val => {
    this.setState({input: this.state.input + val});
  }

  computeValue = () => {
    try {
      this.setState({input: eval(this.state.input).toString()});
    } catch (e) {
      if (e instanceof SyntaxError) {
        this.setState({input: "ERROR"});
      }
    }
  }

  backspaceScreen = () => {
    this.setState({input: this.state.input.substring(0,this.state.input.length-1)});
  }

  render() {
    return (
      <div className="app">
        <div className="calc">
        <Input input={this.state.input}></Input>
        <div className="row">
          <Button handleClick={this.concatenateInput}>(</Button>
          <Button handleClick={this.concatenateInput}>)</Button>
          <Button handleClick={this.backspaceScreen}>CE</Button>
          <ClearButton handleClear={() => this.setState({input: ""})}>C</ClearButton>
        </div>
        <div className="row">
          <Button handleClick={this.concatenateInput}>7</Button>
          <Button handleClick={this.concatenateInput}>8</Button>
          <Button handleClick={this.concatenateInput}>9</Button>
          <Button handleClick={this.concatenateInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.concatenateInput}>4</Button>
          <Button handleClick={this.concatenateInput}>5</Button>
          <Button handleClick={this.concatenateInput}>6</Button> 
          <Button handleClick={this.concatenateInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.concatenateInput}>1</Button>
          <Button handleClick={this.concatenateInput}>2</Button>
          <Button handleClick={this.concatenateInput}>3</Button>
          <Button handleClick={this.concatenateInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.concatenateInput}>0</Button>
          <Button handleClick={this.concatenateInput}>.</Button>
          <Button handleClick={this.computeValue}>=</Button>
          <Button handleClick={this.concatenateInput}>+</Button>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
