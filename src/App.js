import React from 'react';
import ToolBar from './ToolBar'
import BookList from './BookList'
import { all } from 'q';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm: "help",
        printType: "all",
        price: null,
        books: []
    };
  }
  setPrintType = (value) => {
      this.setState({
        printType: value
      }, () => {
        this.fetchList()
      })
  }
  setPrice = (value) => {
      this.setState({
        price: value
      }, () => {
        this.fetchList()
      })
  }

  setQuery = (e, value) => {
    e.preventDefault();
    this.setState({
      searchTerm: value
    }, () => {
      this.fetchList()
    })
  }

  fetchList() {
    console.log(`fetch ran with ${this.state.searchTerm}`)
    const q = this.state.searchTerm
    const printType = this.state.printType
    const price = this.state.price 
                    ?`filter=${this.state.price}`
                    :" ";
    const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyAt-WnjRk-uZWdMCQdSDKNtQ3-QDJ_EOyw&q=${q}&printType=${printType}&${price}`
    console.log(url)
    fetch(url)
      .then(response=> {
        if(!response.ok) {
          console.log('An error did occur, let\'s throw an error.');
            throw new Error('Something went wrong');
        }
        return response;
        })
      .then(response=>response.json())
      .then(data => {
        const books = data.items
        console.log(data.items)
        this.setState({
          books
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }
  
  render() {
    console.log(this.state.books)
    const error = this.state.error
    ? <div className="bookapp_error">{this.state.error}</div>
    : "";
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <ToolBar 
          changeHandlerPrint={this.setPrintType}
          changeHandlerPrice={this.setPrice}
          handleSubmit = {this.setQuery}/>
          <BookList books={this.state.books}/>
          {error}
        </main>
      </div>
  );
  }
}

export default App;
