import '../App.css'
import React, { Component } from "react";
import { buttonValues } from './Buttons';

class ClassCalculator extends Component {

    constructor() {
        super()
        this.state = {
            result: ''
        }
    }

    handleClick = (e) => {
        let inputString = this.state.result + e.target.name
        this.setState({
            result: inputString
        })
      }
    
      backspace = () => {
        let inputString = this.state.result.slice(0, this.state.result.length-1)
        this.setState({
            result: inputString
        })
      }
    
      clear = () => {
        this.setState({
            result: ''
        })
      }
    
      calculate = () => {
        let newResult = ""
        try {
            newResult = eval(this.state.result).toString()
        }
        catch(error) {
            newResult = "Error"
        }
        this.setState({
            result: newResult
        })
      }

    render() {
        return (
            <div className="calc-app">
                <form>
                    <input type="text" defaultValue={this.state.result}>
                    </input>
                </form>

                <div className='keypad'>
                    
                {
                    buttonValues.flat().map(
                    (b, i) => {
                        return (
                        <button id={b} key={b} onClick={
                        b === "Clear"
                        ? this.clear
                        : b === "C"
                        ? this.backspace
                        : b === "Result"
                        ? this.calculate
                        : this.handleClick
                        } name={b}>
                        {b}
                        </button> )
                    }
                    )
                }

                    {/*
                    <button id='clear' onClick={this.clear}>Clear</button>
                    <button id='backspace' onClick={this.backspace}>C</button>
                    <button name="+" onClick={this.handleClick}>+</button>
                    <button name="7" onClick={this.handleClick}>7</button>
                    <button name="8" onClick={this.handleClick}>8</button>
                    <button name="9" onClick={this.handleClick}>9</button>
                    <button name="-" onClick={this.handleClick}>-</button>
                    <button name="4" onClick={this.handleClick}>4</button>
                    <button name="5" onClick={this.handleClick}>5</button>
                    <button name="6" onClick={this.handleClick}>6</button>
                    <button name="*" onClick={this.handleClick}>*</button>
                    <button name="1" onClick={this.handleClick}>1</button>
                    <button name="2" onClick={this.handleClick}>2</button>
                    <button name="3" onClick={this.handleClick}>3</button>
                    <button name="/" onClick={this.handleClick}>/</button>
                    <button name="0" onClick={this.handleClick}>0</button>
                    <button name="." onClick={this.handleClick}>.</button>
        <button id='result' onClick={this.calculate}>Result</button> */}
                </div>
            </div>
        )
    }
}

export default ClassCalculator