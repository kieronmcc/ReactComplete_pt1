import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};

// Nore people state replace this.state as "this" keyword is not 
// available in a js function declared outside of a class
const [ peopleState, setPeopleState ] = useState({
  people: [
    {name: 'Kieron', age: 56},
    {name: 'Kelly', age: 25},
    {name: 'Liz', age: 55}
  ]
});

// Note this function is being defined inside another function
// Note also that unlike the class based state handling the state
// is NOT MERGED with the current state - setPeopleState REPLACES the state
// array  
// "Merge" states by using multiple calls to useState()
const switchNameHandler = (newName) => {
  // console.log('Was clicked!');
  setPeopleState({people: [
    {name: newName, age: 56},
    {name: 'Kelly', age: 26},
    {name: 'Liz', age: 55}
  ]}); 
};

const NameChangeHandler = (event) => {
  setPeopleState({people: [
    {name: 'Kieron', age: 56},
    {name: event.target.value, age: 25},
    {name: 'Liz', age: 55}
  ]});
};

return (
  <div className="App">
    <h1>Hi, I'm a React App</h1>
    <p>This is really working</p>
    <button
      style={style}
      onClick={() => switchNameHandler("React Kieron")}>Switch Name</button>
    <Person 
      name={peopleState.people[0].name} 
      age={peopleState.people[0].age} />
    <Person 
      name={peopleState.people[1].name}
      age={peopleState.people[1].age} 
      fred={switchNameHandler.bind(this, 'Reactive Kieron')} 
      changed={NameChangeHandler}  >My hobbies are: Slarfing</Person>
    <Person 
    name={peopleState.people[2].name} 
    age={peopleState.people[2].age} />
  </div>
);
//return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a React App!!!!' ));
}


export default App;





