import React from 'react';

export default class Rend extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             articles: props.articles,
             statusText: props.statusText,
             topic: props.topic,           
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
                    <div className="ccard bg-light border-light rounded shadow-lg mb-3ard mb-3 animate__animated animate__zoomIn" key={i} style={{maxWidth: "100%", }} >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={currentArticle.urlToImage} className="card-img" alt='not available'/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body bg-light" key={i}>
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
        }else{
            console.log('conditon not satisfied')
        }

        return (
            <div className="NewsContainer">
                <h2 className="animate__animated animate__shakeX animate__delay-2s">Search result for {this.state.topic} </h2>
                <br/>
                {articlesDiv}
            
            </div>
            )
    }
}
