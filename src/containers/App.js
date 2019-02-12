import React, { Component } from 'react';
import cssClasses from './App.css';
import People from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor (props) {
    super (props);
    console.log('[app.js] constructor');
    // could initialise this.state in constructor
    // code below effectively makes this call automagically
  }
  state = {
    people: [
      {id: 'dgd1', name: 'Kieron', age: 56},
      {id: 'dfgdgd2', name: 'Kelly', age: 25},
      {id: 'dfgdf3', name: 'Liz', age: 55}
    ],
    showPeople: false,
    showCockpit: true
  };
  // **** start create lifecycle hooks ****
  static getDerivedStateFromProps(props, state) {
    // Where you can update state
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  };

  // Most Important hooks
  componentDidMount() {
    console.log('[App.js] componentDidMount called');
  };

  // Most Important hooks
  shouldComponentUpdate(nextProps, nextStat) {
    console.log('[App.js] shouldComponentUpdate called');
     return true;
  };

  // Most Important hooks
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate called');
  };

  // **** End lifecycle hooks ****

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
    console.log('[App.js] render now rendering children');
    let people = null;

    // use ids on objects so that JSX renders DOM effeciently
    if (this.state.showPeople) {
      people = <People 
            people={this.state.people} 
            clicked={this.deletePersonHandler}
            changed={this.NameChangeHandler} />; 
    }  

    return (
        <div className={cssClasses.App}>
        <button 
          onClick={() => {
            this.setState({showCockpit: false});
          }}
        >
          Remove Cockpit
        </button>
        { this.state.showCockpit ? (
          <Cockpit 
              title={this.props.appTitle}
              showPeople={this.state.showPeople}
              people={this.state.people}
              clicked={this.togglePeopleHandler}
          />
        ) : null }
          {people}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a React App!!!!' ));
  }
}

export default App;
