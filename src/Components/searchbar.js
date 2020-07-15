import React from 'react';

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
        let topic = this.state.value;
        this.props.getdata(topic);
        this.setState.currentSearch = true;
        // 031fbd6bd5b5cccf859871f467e9b93e
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    handleChange=(event)=> {
        this.setState({value: event.target.value});
    }

    render() {

        

        return (
             <div>

                <form onSubmit={this.handleSubmit} >
                    <i className="fas fa-search" aria-hidden="true"/>
                    <input className="form-control" type="text" placeholder="Search for another topic" aria-label="Search" value={this.state.value} onChange={this.handleChange}/>  
                </form>

             </div>
        );
    }

}
