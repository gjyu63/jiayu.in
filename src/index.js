import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Belief from './Belief'
import {Route,BrowserRouter} from 'react-router-dom';



ReactDOM.render(<App />, document.getElementById('root'));


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
    <BrowserRouter>
      <Route path="/belief" component={Belief} /> 
      <Route path="/" component={App} />
    </BrowserRouter>
*/ 


// class index extends Component {
//     render() {
//         return (
//             <div>
//                 <Route path="/belief" component={Belief} /> 
//                 <Route path="/" component={App} /> 
//             </div>
//         );
//     }
// }
