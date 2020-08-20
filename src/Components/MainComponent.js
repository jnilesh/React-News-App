import React from 'react';
import SearchBar from './searchbar'
import Rend from './rend'
import Header from './HeaderComponent'
import  Sidebar from './Sidebar'
// import Fetch from "./Components/Fetch"
import { Loading } from './LoadingComponent';
import { connect } from 'react-redux';
import { getNews,getTopicNews} from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}

const mapDispatchToProps = dispatch => ({
  getNews: (topic) => {dispatch(getNews(topic))},
  getTopicNews: (topic) => {dispatch(getTopicNews(topic))},
});

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topic: "India",
    }

    this.setTopic = this.setTopic.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  componentDidMount() {
        this.props.getNews(this.state.topic)
    }

  setTopic=(subject) => {
    this.setState({ topic : subject})
    this.props.getNews(subject)
  }

  setCategory=(subject) => {
    this.setState({ topic : subject})
    this.props.getTopicNews(subject)
  }  

  render() {
     if (this.props.isLoading) {
        return(
                <Loading />
        );
    }
    else if (this.props.errMess) {
        return(
                <h4>{this.props.errMess}</h4>
        );
    }

    return (
      <React.Fragment>
      
      <Sidebar setCategory={this.setCategory} />
      <Header/>
      <div className="container">
        <SearchBar setTopic={this.setTopic} />
        <br/>
         <Rend 
         topic={this.state.topic} 
         articles={this.props.articles.articles}
         newsLoading={this.props.articles.isLoading}
         newsErrMess={this.props.articles.errMess}
              />
        </div>
    </React.Fragment>
       
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

