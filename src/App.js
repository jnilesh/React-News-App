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
         ready:false,
         statusText: "",
 
    };
    this.getdata = this.getdata.bind(this);
  }

  getdata=(topic)=>{
    // let query = ('https://gnews.io/api/v3/search?q=' + topic + '&token=0666b9658606f10439c9a1bc2c1f3347')
    let query = ('http://newsapi.org/v2/everything?q=' + topic + '&apiKey=6b81ea3ddce64c7a97f6b754a64af8a2')
    console.log(query);
  
    axios.get(query)
        .then(res => {
            console.log(res)
            this.setState({ articles : res.data.articles,ready: true,statusText: res.statusText, topic: topic});
            console.log(this.state.articles);
            console.log(this.state.statusText);
        })
        .catch(
          (error)=>{console.log("Error - "+error)}
        );

  }


  render() {
    return (
      <div className="App">
        <br/>
        <center><h1 className="animate__animated animate__fadeInDown animate__delay-2s">News</h1></center>
        <br/>
        <SearchBar getdata={this.getdata} ></SearchBar>
        <br/>

        {this.state.ready ? <
          Rend topic={this.state.topic} statusText={this.state.statusText} articles={this.state.articles}/> : 
        <TopNews/> 
        }

        {/* <Rend turnback={this.turnback} articles={this.state.articles}></Rend> */}
        
    </div>
       
    );
  }
}
