import React, {Component} from 'react';
import cssClasses from './Person.css';
import Auxillary from '../../../hoc/Auxillary';
import withHOCClass from '../../../hoc/withHOCClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
    /* Can also set refs from the constructor and then 
    use them wherever you want in the JSX (meh) 
    */
    constructor(props) {
        super(props);
        this.inputElemRef = React.createRef(); // the ref has no type!
    };

    // Alternate way of accessing context outside of JSX
    static contextType = AuthContext;

    componentDidMount() {
        /*this works because componentDidMount executes after render()
        and new class property inputElem will have been set.
        */
        //this.inputElem.focus();
        this.inputElemRef.current.focus();
        console.log("Person Context: ",this.context.authenticated);
    };

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
                <AuthContext.Consumer>
                    {(context) => 
                        context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer>                
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    key={this.props.key}
                    //ref={(me) => {this.inputElem = me}}
                    ref={this.inputElemRef}
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

/* This type checks the props passed to the component
However it does check if other invalid props are passed in.
i.e. these so called components have no interface and are not really black boxes
*/
Person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withHOCClass(Person, cssClasses.Person);