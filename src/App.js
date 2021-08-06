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
    showBooks: true
  }

  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index]
    }
    book.writer = event.target.value;
    const books = [...this.state.books];
    books[index] = book;

    this.setState({ books: books })
  }

  deleteBookState = index => {
    const books = this.state.books;
    books.splice(index, 1);
    this.setState({
      books: books
    });
  };
  toggleBooks = () => {
    this.setState({ showBooks: !this.state.showBooks });
  }

  render() {

    const styl = {
      border: "1px solid red",
      borderRadius: "5ps",
      backgroundColor: "black",
      color: "white"
    }

    const books = this.state.books.map((book, index) => {
      return (
        <Book bookName={book.bookName}
          writer={book.writer}
          delete={() => this.deleteBookState(index)}
          inputName={(event) => this.changeWithInputState(event, index)

          }
        />


      );
    });
    return (
      <div className="App">
        <h1 style={styl}> Book List2</h1>
        <button onClick={this.toggleBooks}> Toggle Book</button>
        {this.state.showBooks ? books : null}

      </div>
    );
  }
}

export default App;
