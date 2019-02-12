import React, {Component} from 'react';
import cssClasses from './Person.css';
import Auxillary from '../../../hoc/Auxillary';
import withHOCClass from '../../../hoc/withHOCClass';

class Person extends Component {
    render() {
        console.log('[People.js] rendering ...');
        // return (
        //     // Using css classes like this mean that css can be scoped per component 
        //     // if required
        //     <div className={cssClasses.Person} >
        //         <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input 
        //             type="text" 
        //             onChange={this.props.changed} 
        //             value={this.props.name} 
        //         />
        //     </div>
        // )
        // We can remove the div and wrapping the elements is an ARRAY also
        // and this gets around the React limitation on not updating adjacent elements
        // and only returning one root element from a component
        // return [
        //     <p key="i1" onClick={this.props.click}>
        //         I'm {this.props.name} and I am {this.props.age} years old!
        //     </p>,
        //     <p key="i2" >{this.props.children}</p>,
        //     <input 
        //         key="i3"
        //         type="text" 
        //         onChange={this.props.changed} 
        //         value={this.props.name}
        //     />
        // ]; 
        // Or you can use a
        // higher order component to provide the wrapping without the array and extra keys
        return (
            // Using css classes like this mean that css can be scoped per component 
            // if required
            <Auxillary>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Auxillary>
        )
        // Or you can use a built in React component called Fragment to do the same thing
        // return (
        //     // Using css classes like this mean that css can be scoped per component 
        //     // if required
        //     <React.Fragment>
        //         <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input 
        //             type="text" 
        //             onChange={this.props.changed} 
        //             value={this.props.name} 
        //         />
        //     </React.Fragment>
        // )
    }
};

export default withHOCClass(Person, cssClasses.Person);