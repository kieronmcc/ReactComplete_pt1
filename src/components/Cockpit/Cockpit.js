import React, { useEffect } from 'react';
import cssClasses from './Cockpit.css';

const cockpit = (props) => {
    /* The function declared here will be used for every
        render cycle of this functional component.
    */
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     /* e.g. http request....
    //      so this provides equivalent of componentDidMount & componentDidUpdate
    //      for everything else we can useState and pass in the props 
    //      as an initial state
    //      */

    //      /* example simulate only running http request when create for first time */
    //     setTimeout( () => {
    //          alert('Saved data to cloud!', 1000);
    //     });
    // }, [props.people]); // now will only react on a change to this data so can add more than one useEffect call
    // // can depend on multiple fields e.g. [a,b,c]

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout( () => {
             alert('Fetched initial data from cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []); // so declare no dependencies. Runs when cockpit mounts/unmounts

    let btnClass = '';
    if(props.showPeople) {
        btnClass = cssClasses.Red;
    }

     // classes is valid css class list that can be assigned to className
     const classes =  []; 
     if (props.peopleLength <=2) {
       classes.push(cssClasses.red); 
     }
     if (props.peopleLength <=1) {
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

export default React.memo(cockpit);