import React from 'react';

export default class Header extends React.Component {

    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    window.location.href="/"
  }


    render() {

        

        return (
          <div  className="jumbotron jumbotron-fluid animate__animated animate__fadeInDown animate__delay-1s ">
              <div  className="container">

                <h1 onClick={()=> {this.handleSubmit()}} className="display-4 row ml-1 pointer"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i> Headnews</strong></h1>
                <p className="lead">Because Information is Power, So let us make you Powerfull!!!</p>
              </div>
            </div>
        );
    }

}

// <div className="btn-group row" role="group" aria-label="Categories">
//       <button type="button" onClick={()=>{this.handleSubmit("business")}} className="btn btn-outline-primary animate__animated animate__zoomIn">Business</button>
//       <button type="button" onClick={()=>{this.handleSubmit("technology")}} value="technology" className="btn btn-outline-secondary animate__animated animate__zoomIn">Technology</button>
//       <button type="button" onClick={()=>{this.handleSubmit("entertainment")}} value="entertainment" className="btn btn-outline-success animate__animated animate__zoomIn">Entertainment</button>
//       <button type="button" onClick={()=>{this.handleSubmit("sports")}} value="sports" className="btn btn-outline-danger animate__animated animate__zoomIn">Sports</button>
//       <button type="button" onClick={()=>{this.handleSubmit("science")}} value="science" className="btn btn-outline-warning animate__animated animate__zoomIn">Science</button>
//       <button type="button" onClick={()=>{this.handleSubmit("health")}} value="health" className="btn btn-outline-info animate__animated animate__zoomIn">Health</button>
//     </div>

    // <div className="row mr-2">
                // <form className="form-inline">
                //   <div className="input-group sticky-top">
                //     <div className="input-group-prepend">
                //       <span className="input-group-text" id="basic-addon1">@</span>
                //     </div>
                //     <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                //   </div>
                // </form>
                // </div>