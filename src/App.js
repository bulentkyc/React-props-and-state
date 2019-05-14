import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person'



class App extends Component {

  state = {
    persons:[
      {name: 'Koku', age: 34},
      {name: 'Patrizio', age: 42},
      {name: 'Gonzalo', age: 38}
    ],
    otherState: {company:'DCI'}
  }

  changeNameHandler = () => {
    console.log('clicked');
    this.setState({
      persons:[
        {name: 'Ahmad', age: 34},
        {name: 'Dali', age: 42},
        {name: 'Enrica', age: 38}
    ]
    });

    console.log(this.state);
  }

  render(){
    return (
      <div className="App">
      <button onClick={this.changeNameHandler}>Change Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby: Coding!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} country="Chile">
          Hobby: Dancing!
        </Person>
      </div>
    );
  }
}

export default App;
