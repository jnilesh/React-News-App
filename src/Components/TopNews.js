import React from 'react';
import axios from 'axios';

export default class TopNews extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             articles: null,
             statusText: "",

        };
    }
    

    componentDidMount(){
        axios.get('https://gnews.io/api/v3/search?q=india&image=required&token=22367f14c1b088d0e01fa54992382d16')
        // axios.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=9552332f84ee4642980836b89205e47d')
            .then(res => {
                this.setState({ articles : res.data.articles , statusText: res.statusText});
                console.log("top news");
                console.log(this.state.articles);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {

       
        const articlesDiv = [];
        if (this.state.articles !== null && this.state.statusText === 'OK') {
            let len = this.state.articles.length;
            for (let i=0; i < len ; i += 1) {
                const currentArticle = this.state.articles[i];
                articlesDiv.push(
                    <div className="card bg-light border-light rounded shadow-lg mb-3 animate__animated animate__zoomIn" key={i} style={{maxWidth: "100%", }} >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={currentArticle.image} className="card-img" alt='not available'/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body ">
                                    <h5 className="card-title">{currentArticle.title}</h5>
                                    <p className="card-text"><small className="text-muted">{currentArticle.source.name}</small></p>
                                    <p className="card-text"><a href={currentArticle.url}>{currentArticle.description}</a></p>
                                    <p className="card-text"><small className="text-muted">{currentArticle.publishedAt}</small></p>
                                </div>
                            </div>
                        </div>
                     </div>

                )
            }
        }

        return (
            <div>
                <h3 className="animate__animated animate__shakeX animate__delay-2s">Top India Headlines</h3>
                <br/>
                <div className="NewsContainer">
                    {articlesDiv}
                
                </div>
            </div>
            )
    }

}	