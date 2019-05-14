import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className = "person-card">
            <h2>Name: {props.name}</h2>
            <h2>Age: {Math.floor(Math.random()*2*props.age)}</h2>
            <h2>{props.country}</h2>
            <h3>{props.children}</h3>
        </div>
    );
}

export default person;