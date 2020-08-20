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
        this.setTopic = this.props.setTopic.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        let topic = this.state.value;
        this.props.setTopic(topic);
        this.setState.currentSearch = true;
        // 031fbd6bd5b5cccf859871f467e9b93e
        
    }


    handleChange=(event)=> {
        this.setState({value: event.target.value});
    }

    render() {

        

        return (
             <div className="animate__animated animate__fadeIn animate__delay-1s sticky">

                <form onSubmit={this.handleSubmit} >
                 <div className="input-group mb-3">
                  
                  <input className="form-control" type="text" placeholder="Search News for other topic" aria-label="Search" value={this.state.value} onChange={this.handleChange}/>
                    <div className="input-group-prepend">
                    
                        <button type="submit" className="input-group-text fa fa-search form-control-feedback"/>
                    
                  </div>
                 </div>   
                </form>
             </div>
        );
    }

}
