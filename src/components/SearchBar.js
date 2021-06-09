import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    //stop pages form auto submit 
    //because form element default when you press enter, they going to submit
    onFormSubmit(event) {
        event.preventDefault();
    }

  
    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Images Searching</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value }) } 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;