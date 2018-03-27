import React, { Component } from 'react';

class FilterObject extends Component {

    constructor(){
        super();

        this.state = {
            employees: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                },
                {
                    name: 'Jason Begay',
                    title: 'Manager',
                    hobby: 'Music'
                  }
              ],
        
            userInput: '',
            filteredEmployees: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterEmployees(prop) {
        var employees = this.state.employees;
        var filteredEmployees = [];
        for (var i=0; i<employees.length;i++){
            if(employees[i].hasOwnProperty(prop)){
                filteredEmployees.push(employees[i])
            }
        }
    this.setState({ filteredEmployees: filteredEmployees })    
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <p className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </p>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
                <p className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredEmployees, null, 10) }</p>
            </div>
        )
    }
}

export default FilterObject;