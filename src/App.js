import React, {Component} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import Main from './main';
import Belief from './Belief';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Route exact path="/" component={Main}></Route>
            <Route path="/belief" component={Belief}></Route>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
