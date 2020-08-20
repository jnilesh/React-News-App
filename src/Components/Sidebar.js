import React from 'react';

export default class Sidebar extends React.Component {

    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(topic){
    this.props.setCategory(topic);
  }


    render() {
    	  	
        

        return (

        	<nav className="navbar animate__animated animate__fadeInLeft animate__delay-1s">
				    <ul className="navbar-nav">
				      <li className="logo">
				        <a href="/" className="nav-link">
				          <span className="link-text logo-text">Headnews</span>
				          <svg
				            aria-hidden="true"
				            focusable="false"
				            data-prefix="fad"
				            data-icon="angle-double-right"
				            role="img"
				            xmlns="http://www.w3.org/2000/svg"
				            viewBox="0 0 448 512"
				            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
				          >
				            <g className="fa-group">
				              <path
				                fill="currentColor"
				                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
				                className="fa-secondary"
				              ></path>
				              <path
				                fill="currentColor"
				                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
				                className="fa-primary"
				              ></path>
				            </g>
				          </svg>
				        </a>
				      </li>

				      <li onClick={()=>{this.handleSubmit("business")}} className="nav-item">
				        <a href="#" className="nav-link">
				          <i className="fas fa-briefcase fa-3x"></i>
				          <span className="link-text">Business</span>
				        </a>
				      </li>

				      <li onClick={()=>{this.handleSubmit("technology")}} className="nav-item">
				        <a href="#" className="nav-link">
				          <i className="fas fa-microchip fa-3x"></i>
				          <span className="link-text">Technology</span>
				        </a>
				      </li>

				      <li onClick={()=>{this.handleSubmit("entertainment")}} className="nav-item">
				        <a href="#" className="nav-link">
				          <i className="fas fa-film fa-3x"></i>
				          <span className="link-text">Entertainment</span>
				        </a>
				      </li>

				      <li onClick={()=>{this.handleSubmit("sports")}} className="nav-item">
				        <a href="#" className="nav-link">
				          <i className="fas fa-football-ball fa-3x"></i>
				          <span className="link-text">Sports</span>
				        </a>
				      </li>

				      <li onClick={()=>{this.handleSubmit("science")}} className="nav-item" id="themeButton">
				        <a href="#" className="nav-link">
				          <i className="fas fa-flask fa-3x"></i>
				          <span className="link-text">Science</span>
				        </a>
				      </li>

				      <li onClick={()=>{this.handleSubmit("health")}} className="nav-item" id="themeButton">
				        <a href="#" className="nav-link">
				          <i className="fas fa-heartbeat fa-3x"></i>
				          <span className="link-text">Health</span>
				        </a>
				      </li>

				    </ul>
				  </nav>
        		)}
    }