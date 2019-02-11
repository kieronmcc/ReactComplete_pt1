import React from 'react';
import cssClasses from './Cockpit.css';

const cockpit = (props) => {

    let btnClass = '';
    if(props.showPeople) {
        btnClass = cssClasses.Red;
    }

     // classes is valid css class list that can be assigned to className
     const classes =  []; 
     if (props.people.length <=2) {
       classes.push(cssClasses.red); 
     }
     if (props.people.length <=1) {
       classes.push(cssClasses.bold); 
     }

    return (
        <div className={cssClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle People</button>
        </div>
    );
};

export default cockpit;