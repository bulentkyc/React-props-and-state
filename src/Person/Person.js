import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className = "person-card" style={props.myStyling} >
            <h2 onClick={props.click}>Name: {props.name}</h2>
            <h2>Age: {Math.floor(Math.random()*2*props.age)}</h2>
            <input type="text" onChange={props.change} value={props.name}/>
            <h2>{props.key}</h2>
            <h3>{props.children}</h3>
        </div>
    );
}

export default person;