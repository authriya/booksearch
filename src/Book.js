import React from 'react'

class Book extends React.Component{
    render() {
        console.log(this.props.price)
        return(
            <li key={this.props.id} id={this.props.id}>
                name = {this.props.name}
                <img src = {this.props.imageLink}/>
                author = {this.props.author}
                price = {this.props.price}
                <p>description = {this.props.description}</p>
            </li>
        )
    }
}

export default Book