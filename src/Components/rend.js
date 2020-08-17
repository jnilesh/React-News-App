import React from 'react';

export default class Rend extends React.Component {

    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(url){
        console.log(url)
        window.location.href = url;
    }

    

    render() {

        let newArticle = [];
        if (this.props.articles !== null) {
            newArticle = this.props.articles.map((article) => 
                <div onClick={()=> {this.handleSubmit(article.url)}} key={article.url} className="card bg-light border-light rounded shadow-lg mb-3ard mb-3 animate__animated animate__zoomIn pointer" style={{maxWidth: "100%"}} >
                        <div className="row no-gutters">
                         
                                { article.image && <div className="col-md-4"> <img src={article.image} className="card-img" alt='not available'/></div>}
                        
                            <div className="col-md-8 ml-auto mr-auto">
                                <div className="card-body bg-light">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text"><small className="text-muted">{article.source.name}</small></p>
                                    {article.description && <p className="card-text">{article.description}</p>}
                                    <p className="card-text"><small className="text-muted">{article.publishedAt}</small></p>
                                </div>
                            </div>
                            
                        </div>
                     </div>
            );
                
        }else{
            console.log('conditon not satisfied')
        }

        return (
            <div className="NewsContainer">
                <h2 className="animate__animated animate__shakeX animate__delay-1s">Search result for {this.props.topic}</h2>
                <br/>
                {newArticle}
            
            </div>
            )
    }
}



// function artRend({currentArticle},{key}) {
//     const img = currentArticle.image
//     return
//         <div className="card bg-light border-light rounded shadow-lg mb-3ard mb-3 animate__animated animate__zoomIn" key={key} style={{maxWidth: "100%", }} >
//                         <div className="row no-gutters">
//                             { img ? <div className="col-md-4">
//                                                             <img src={currentArticle.image} className="card-img" alt='not available'/>
//                                                         </div> : null}
//                             <div className="col-md-8">
//                                 <div className="card-body bg-light">
//                                     <h5 className="card-title">{currentArticle.title}</h5>
//                                     <p className="card-text"><small className="text-muted">{currentArticle.source.name}</small></p>
//                                     <p className="card-text"><a href={currentArticle.url}>{currentArticle.description}</a></p>
//                                     <p className="card-text"><small className="text-muted">{currentArticle.publishedAt}</small></p>
//                                 </div>
//                             </div>
//                         </div>
//                      </div> 
// }