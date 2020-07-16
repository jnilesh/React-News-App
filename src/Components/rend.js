import React from 'react';

export default class Rend extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             articles: props.articles,
             statusText: props.statusText,           
        };
    }

    componentDidMount() {
        this.setState({});
      }


    componentDidUpdate(articles){
        if(this.state.articles !== this.props.articles){
            this.setState({          
                articles : this.props.articles
            });
        }
    }

    render() {

        console.log("inside");
        const articlesDiv = [];
        if (this.state.articles !== null && this.state.statusText === 'OK') {
            for (let i=0; i < this.state.articles.length; i += 1) {
                const currentArticle = this.state.articles[i];
                articlesDiv.push(
                    <div className="card mb-3" style={{maxWidth: "100%", }} >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={currentArticle.urlToImage} className="card-img" alt='not available'/>
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
        }else{
            console.log('conditon not satisfied')
        }

        return (
            <div className="NewsContainer">
                {articlesDiv}
                <br/>
            </div>
            )
    }
}
