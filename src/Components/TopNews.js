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
        axios.get('https://gnews.io/api/v3/search?q=india&country=in&max=20&image=required&token=1aad0666c399a5f300c2819342661969')
            .then(res => {
                this.setState({ articles : res.data.articles});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {

       
        const articlesDiv = [];
        if (this.state.articles !== null) {
            for (let i=0; i < this.state.articles.length ; i += 1) {
                const currentArticle = this.state.articles[i];
                articlesDiv.push(
                    <div className="card mb-3" style={{maxWidth: "100%", }} >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={currentArticle.image} className="card-img" alt='not available'/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{currentArticle.title}</h5>
                                <p className="card-text"><small className="text-muted"><a href={currentArticle.url}>{currentArticle.source.name}</a></small></p>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                <h1>Top India News</h1>
                <div className="NewsContainer">
                    {articlesDiv}
                    <br/>
                </div>
            </div>
            )
    }

}	