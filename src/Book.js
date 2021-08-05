import React, { Component } from 'react';



class Book extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>Book: {this.props.bookName}</h3>
                <h4>Writer: {this.props.writer}</h4>
            </div>

        );
    }

}


export default Book;



