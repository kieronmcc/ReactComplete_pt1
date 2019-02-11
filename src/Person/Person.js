import React from 'react';
import cssClasses from './Person.css';

const person = ( props ) => {
    const rnd = Math.random();
    if ( rnd > 0.7 ) {
        throw new Error( 'Something went wrong');
    }
    return (
    // Using css classes like this mean that css can be scoped per component 
    // if required
    <div className={cssClasses.Person} >
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    )
};

export default person;