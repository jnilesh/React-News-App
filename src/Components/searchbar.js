import React from 'react';
import Fetch from './Fetch';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentSearch: false,
            value: '',
            
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(event) {
        this.setState.currentSearch = true;
        // 031fbd6bd5b5cccf859871f467e9b93e
        alert('A name was submitted: ' + this.state.value);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        

        return (
             <div>

                <form onSubmit={this.handleSubmit} >
                    <i className="fas fa-search" aria-hidden="true"/>
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={this.state.value} onChange={this.handleChange}/>  
                </form>

                <Fetch topic={this.state.value} />

             </div>
        );
    }

}
