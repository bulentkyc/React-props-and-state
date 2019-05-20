import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person'



class App extends Component {

  state = {
    persons:[
      {name: 'Koku', age: 34},
      {name: 'Patrizio', age: 42},
      {name: 'Gonzalo', age: 38},
      {name: 'Koku', age: 34},
      {name: 'Patrizio', age: 42},
      {name: 'Gonzalo', age: 38}
    ],
    otherState: {company:'DCI'},
    myStyle :{
      backgroundColor: 'gray',
      padding: '10px',
      border: '3px solid red'
    },
    showPerson: false
  }

  changeNameHandler = (event) => {
    this.setState({
      persons:[
        {name: event.target.value, age: 34},
        {name: 'Dali', age: 42},
        {name: 'Enrica', age: 38}
    ]
    });
  }

  updateStyling = () => {
    this.setState({
      myStyle: {
        backgroundColor: 'white',
        padding: '10px',
        border: '3px solid red'
      }
    });
  }

  togglePersons = () => {
    this.setState({
      showPerson:!this.state.showPerson
    });
  }

  deletePersonHandler = (index) => {
    const newPersons = this.state.persons;
    newPersons.splice(index, 1);
    this.setState({
      persons:newPersons
    });
  }

  render(){

    let persons = null;

    if (this.state.showPerson) {
      persons = (
      <div>
        {this.state.persons.map((value, index) => {
          return <Person 
          name={value.name} 
          age={value.age}
          click = {()=>this.deletePersonHandler(index)}
        />
        })}
      </div>
      );

    } else {
      persons = <h1>Hidden!</h1>
    }
    
    return (
      <div className="App">
      {/*<button onClick={this.changeNameHandler.bind(this, 'Dali')}>Change Name</button>*/}
      <button 
        //onClick={()=>this.changeNameHandler('Dali')}
        onClick={this.togglePersons}
        style={this.state.myStyle}
      >Change Name</button>

      {persons}
      

    </div>
    );
  }
}

export default App;
