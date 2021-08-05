import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class App extends Component {
  state = {
    books: [
      { bookName: "Rakib", writer: "Hasan" },
      { bookName: "Rakib3", writer: "Hasan3" },
      { bookName: "Rakib4", writer: "Hasan4" },
    ],
    otherProp: "I am other Prop"
  }
  changeBookState = (newBookName) => {
    this.setState({
      books: [
        { bookName: newBookName, writer: "Hasan" },
        { bookName: "Rakib2", writer: "Hasan2" },
        { bookName: "Rakib3", writer: "Hasan3" },
      ]
    });
  }
  changeWithInputState = (event) => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "Hasan" },
        { bookName: "Rakib2", writer: "Hasan2" },
        { bookName: "Rakib3", writer: "Hasan3" },
      ]
    });
  }

  render() {

    const styl = {
      border: "1px solid red",
      borderRadius: "5ps",
      backgroundColor: "black",
      color: "white"
    }
    return (
      <div className="App">
        <h1 style={styl}> Book List2</h1>
        <button onClick={this.changeBookState.bind(this, "98")}> Change State</button>
        <input type="text" onChange={this.changeWithInputState} />
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState} />
        <Book bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer}
          inputName={this.changeWithInputState} />
        <Book bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "96")}
          inputName={this.changeWithInputState} />

      </div>
    );
  }
}

export default App;
