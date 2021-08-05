import React, { Component } from 'react';
import './Book.css'
const Book = props => {
    return (
        <div className="Book">
            <h3 onClick={props.change}>
                Book :{props.bookName}</h3>
            <h4>Writer:{props.writer}</h4>
            <input type="text" onChange={props.inputName} />
        </div>
    )
}







export default Book;



