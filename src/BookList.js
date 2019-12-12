import React from 'react'
import Book from './Book'

class BookList extends React.Component {
    render() {
        return(
            <div>
                <h2>Here's your list of books:</h2>
                <ul className="booklist">
                {this.props.books.map((book, idx)=>
                        <Book 
                            name={book.volumeInfo.title}
                            id={idx}
                            key={idx}
                            imageLink={book.volumeInfo.imageLinks.thumbnail}
                            author = {book.volumeInfo.authors}
                            price = {book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : "no price listed"}
                            description = {book.volumeInfo.description}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default BookList