import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class App extends Component {
  // State
  render() {
    return (
      <div className="App">
        <h1>Book List2</h1>
        <Book bookName="1984" writer="George Orwell" />
        <Book bookName="The Da Vinci Code" writer="Dan Brown" />
        <Book bookName="The Alchemist" writer="Paulo Coelho" />
      </div>
    );
  }
}

export default App;
