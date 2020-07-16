import React from 'react';
import axios from 'axios';

export default class TopNews extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             articles: null,

        };
    }
    

    componentDidMount(){
        // axios.get('https://gnews.io/api/v3/search?q=india&country=in&max=20&image=required&token=031fbd6bd5b5cccf859871f467e9b93e')
        axios.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=9552332f84ee4642980836b89205e47d')
            .then(res => {
                this.setState({ articles : res.data.articles});
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
        if (this.state.articles !== null) {
            let len = this.state.articles.length;
            for (let i=0; i < len ; i += 1) {
                const currentArticle = this.state.articles[i];
                articlesDiv.push(
                    <div className="card bg-light border-light rounded shadow-lg mb-3 animate__animated animate__zoomIn" key={i} style={{maxWidth: "100%", }} >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={currentArticle.urlToImage} className="card-img" alt='not available'/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body ">
                                    <h5 className="card-title">{currentArticle.title}</h5>
                                    <p className="card-text"><small className="text-muted">{currentArticle.source.name}</small></p>
                                    <p className="card-text"><a href={currentArticle.url}>{currentArticle.content}</a></p>
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