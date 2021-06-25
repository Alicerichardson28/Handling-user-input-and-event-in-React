import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    //stop pages form auto submit 
    //because form element default when you press enter, they going to submit

    //fixing error can't read property 'state' of undefined
    // onFormSubmit = (event) => {
    //     event.preventDefault();
        
    //     console.log(this.state.term)
    // }
    onFormSubmit (event){
        event.preventDefault();
        
        console.log(this.state.term)
    }

  
    render () {
        return (
            <div className="ui segment">
                {/* make sure invoke onFormSubmit then will passing 
                arrow function and pass down to the onFormSubmit,
                 when form get submit will call arrow function, 
                 then will fix the 'this problem of undefined*/}
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
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