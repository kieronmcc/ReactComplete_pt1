import React, {Component} from 'react';
import cssClasses from './Person.css';

class Person extends Component {
    render() {
        console.log('[People.js] rendering ...');
        return (
            // Using css classes like this mean that css can be scoped per component 
            // if required
            <div className={cssClasses.Person} >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
};

export default Person;