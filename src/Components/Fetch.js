import React from 'react';
import axios from 'axios';

export default function Fetch(topic){
    let articles = null;
    console.log("The topic is " + topic)
    if (topic != null){
        let query = ('https://gnews.io/api/v3/search?q=' + topic + '&token=0666b9658606f10439c9a1bc2c1f3347')
    // let query = ('http://newsapi.org/v2/everything?q=' + topic + '&apiKey=6b81ea3ddce64c7a97f6b754a64af8a2')
    console.log(query);
    axios.get(query)
        .then(res => {
            console.log(res)
            articles = res.data.articles
            console.log(articles)
            return articles;
        })
        .catch(
          (error)=>{console.log("Error - "+error)}
        );
        console.log(articles)
        return (articles);
    }else{
        console.log("topic = null")
        return(null)
    }
    
}