import React from 'react';
import axios from 'axios';

export default class Fetch extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             articles: null,
             topic: this.props.topic,
        };
    }
    

    componentDidMount(){
        // 031fbd6bd5b5cccf859871f467e9b93e
        let query = ('https://gnews.io/api/v3/search?q=' + this.props.topic + '&image=required&token=1aad0666c399a5f300c2819342661969')
        console.log(this.props.topic);
        console.log(this.state.topic);
        // axios.get(query)
        //     .then(res => {
        //         console.log(res);
        //         this.setState({ articles : res.data.articles});
        //         console.log(this.state.articles);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
    }

    render() {

       
        const articlesDiv = [];
        if (this.state.articles !== null) {
            for (let i=0; i < this.state.articles.length; i += 1) {
                const currentArticle = this.state.articles[i];
                articlesDiv.push(
                    <div className="card mb-3" style={{maxWidth: "100%", }} >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={currentArticle.image} className="card-img" alt='image'/>
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
            <div className="NewsContainer">
                {articlesDiv}
                <br/>
            </div>
            )
    }

}	