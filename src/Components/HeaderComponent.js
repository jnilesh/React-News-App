import React from 'react';

export default class Header extends React.Component {

    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(topic){
    this.props.setCategory(topic);
  }


    render() {

        

        return (
          <React.Fragment>
             <nav className="navbar navbar-expand-lg navbar-light bg-light animate__animated animate__fadeInDown animate__delay-1s">
                <a className="navbar-brand" href="/">HEADNEWS</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a href="#" onClick={()=>{this.handleSubmit("business")}} className="nav-link animate__animated animate__zoomIn">Business</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" onClick={()=>{this.handleSubmit("technology")}} className="nav-link animate__animated animate__zoomIn">Technology</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" onClick={()=>{this.handleSubmit("entertainment")}} className="nav-link animate__animated animate__zoomIn">Entertainment</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" onClick={()=>{this.handleSubmit("sports")}} className="nav-link animate__animated animate__zoomIn">Sports</a>
                    </li>
                    <li  className="nav-item">
                      <a href="#" onClick={()=>{this.handleSubmit("science")}} className="nav-link animate__animated animate__zoomIn">Science</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" onClick={()=>{this.handleSubmit("health")}} className="nav-link animate__animated animate__zoomIn">Health</a>
                    </li>
                  </ul>
                </div>

    
                
              </nav>

          
          </React.Fragment>
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