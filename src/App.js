import React from 'react';
import './App.css';
import TopNews from './Components/TopNews'
import axios from 'axios';
import SearchBar from './Components/searchbar'
import Rend from './Components/rend'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
         articles: null,
         topic: this.props.topic,
         ready: false,
 
    };
    this.getdata = this.getdata.bind(this);
    this.turnback = this.turnback.bind(this);
  }

  getdata=(topic)=>{
    let query = ('https://gnews.io/api/v3/search?q=' + topic + '&token=1aad0666c399a5f300c2819342661969')
    console.log(query);
    axios.get(query)
        .then(res => {
            this.setState({ articles : res.data.articles, ready: true});
            console.log(this.state.articles);
        })
        .catch(
          (error)=>{console.log("Error - "+error)}
        );

  }

  turnback=()=>{
    console.log("turnback");
  }

  render() {
    return (
      <div className="App">
        <br/>
        <SearchBar getdata={this.getdata} ></SearchBar>
        <br/>

        {this.state.ready ? <Rend turnback={this.turnback} articles={this.state.articles}/> : <TopNews/> }

        {/* <Rend turnback={this.turnback} articles={this.state.articles}></Rend> */}
        
    </div>
       
    );
  }
}
