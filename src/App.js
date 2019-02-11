import React, { Component } from 'react';
import cssClasses from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    people: [
      {id: 'dgd1', name: 'Kieron', age: 56},
      {id: 'dfgdgd2', name: 'Kelly', age: 25},
      {id: 'dfgdf3', name: 'Liz', age: 55}
    ],
    showPeople: false
  };

  deletePersonHandler = (personIndex) => {
    // const but arrays & objects are ref types 
    // so only changing what element the array points to
    // make a copy of the state array so as to not change the array directly?
    //const people = this.state.people.slice(). So always update state immutably
    // or use ES6 spread operator '...'
    const people = [...this.state.people]; 
    people.splice(personIndex,1);
    this.setState({people: people});
  };
  
  NameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    // Again don't manipulate the object ref directly
    // make a comp with the spread operator
    // and change that
    const person = {
      ...this.state.people[personIndex]
    };

    // Alternative way - copy into empty obj in first arg
    // const person = Object.assign({}, this.state.people[personIndex]);

    person.name = event.target.value;

    const people = [ ...this.state.people];
    people[personIndex] = person;

    this.setState({people: people});
  };

  togglePeopleHandler = () => {
      const currentShowState = this.state.showPeople;
      this.setState({showPeople: !currentShowState});
  };

  render() {
    let people = null;
    let btnClass = '';

    // ErrorBoundary is like a decorator class
    // that wraps another rendered class to enable custom
    // Error handling
    // use ids on objects so that JSX renders DOM effeciently
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <ErrorBoundary key={person.id} >
              <Person 
                click={() =>this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                changed={(event) =>this.NameChangeHandler(event, person.id)} /> 
              </ ErrorBoundary>
          })}
        </div> 
      );
      btnClass = cssClasses.Red;
    }

    // classes is valid css class list that can be assigned to className
    const classes =  []; 
    if (this.state.people.length <=2) {
      classes.push(cssClasses.red); 
    }
    if (this.state.people.length <=1) {
      classes.push(cssClasses.bold); 
    }

    return (
        <div className={cssClasses.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
            className={btnClass}
            onClick={this.togglePeopleHandler}>Toggle People</button>
          {people}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a React App!!!!' ));
  }
}

export default App;
