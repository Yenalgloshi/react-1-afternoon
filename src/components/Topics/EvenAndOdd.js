import React, { Component } from 'react';

class EvenAndOdd extends Component {
    
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    handleChange(val) {
        this.setState({ userInput: val });
    }
    
    assignEvenAndOdds(userInput){
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];

        evens = arr.filter((val) => val % 2 === 0);
        odds = arr.filter((val) => val % 2 === 1);
        
        this.setState({ evenArray: evens, oddArray: odds });
    }
    
    
    
    
    
    
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens And Odds </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)} }> Split </button>
                <p className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </p>
                <p className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) }</p>
            </div>
            
        )
    }
}

export default EvenAndOdd