import React from 'react'

class ToolBar extends React.Component {
    state = {
        searchInput: ' '
    }

    handleSearchInput = (input) => {
        this.setState({
            searchInput: input.target.value
        })
    }
    render() {
        console.log(this.state.searchInput)
        return(
            <div className="toolbar">
                <form className="searchform"
                onSubmit = {submitEvent => this.props.handleSubmit(submitEvent, this.state.searchInput)}>
                    <input type="text" placeholder="search for something"
                    onChange= {this.handleSearchInput}/>
                    <button type="submit">search</button>
                </form>
                <form className="filters">
                    <select id="printtype" name="printtype"
                    onChange ={e => this.props.changeHandlerPrint(e.target.value)}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                    <select id="price" name="price"
                    onChange ={e => this.props.changeHandlerPrice(e.target.value)}>
                        <option value=" ">Any</option>
                        <option value="free-ebooks">Free</option>
                        <option value ="paid-ebooks">Paid</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default ToolBar