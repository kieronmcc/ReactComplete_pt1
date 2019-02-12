import React, {Component} from 'react';
import Person from './Person/Person';

// Remember: ES6 inline function def with arrow function
// if function only contains one line return statement
class People extends Component {
    //*** Update lifecycle methods */
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[PersonList.js] getDerivedStateFromProps');
    //     return state;
    // };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[PersonList.js] shouldComponentUpdate');

        // this function can be used with a condition to 
        // stop the updating the DOM
        return true;
    };

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('[PersonList.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[PersonList.js] componentDidUpdate');
        console.log(snapshot);
    };

    // Add cleanup code say if you have http server connections
    // or other event listeners etc
    componentWillUnmount() {
        console.log('[PersonList.js] componentWillUnmount');
    };

    //*** End of Update lifecycle methods */

    render () {
        console.log('[PeopleList.js] rendering ...');
        return this.props.people.map( (person, index) => {
            return ( 
                <Person 
                    click={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)} 
                /> 
            );    
        });
    };
};

export default People;