import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './todopage/Title'
import Todo from './todopage/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Todo />
          <h1>My First React app</h1>
        </header>
      </div>
    );
  }
}

export default App;
