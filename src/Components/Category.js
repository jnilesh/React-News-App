import React,{Component} from 'react';

class Category extends Component{

	constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleSubmit(topic){
		this.props.setCategory(topic);
	}

	render(){
	return(
		<div className="btn-group row" role="group" aria-label="Categories">
		  <button type="button"	onClick={()=>{this.handleSubmit("business")}} className="btn btn-outline-primary animate__animated animate__zoomIn">Business</button>
		  <button type="button" onClick={()=>{this.handleSubmit("technology")}} value="technology" className="btn btn-outline-secondary animate__animated animate__zoomIn">Technology</button>
		  <button type="button" onClick={()=>{this.handleSubmit("entertainment")}} value="entertainment" className="btn btn-outline-success animate__animated animate__zoomIn">Entertainment</button>
		  <button type="button" onClick={()=>{this.handleSubmit("sports")}} value="sports" className="btn btn-outline-danger animate__animated animate__zoomIn">Sports</button>
		  <button type="button" onClick={()=>{this.handleSubmit("science")}} value="science" className="btn btn-outline-warning animate__animated animate__zoomIn">Science</button>
		  <button type="button" onClick={()=>{this.handleSubmit("health")}} value="health" className="btn btn-outline-info animate__animated animate__zoomIn">Health</button>
		</div>
		)
	}
}

export default Category;