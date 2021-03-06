import React,{Component} from 'react';
import './App.css';
import Main from './Components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <React.Fragment>
            <Main />
          </React.Fragment>
      </Provider>
    );
  }
} 
export default App;