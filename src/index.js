import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Inbox from './Inbox';
import About from './About';
import Home from './Home';
//import ParamsExample from './ParamsExample2';
import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const ParamsExample = Loadable({
  loader: () => import("./ParamsExample2"),
  loading: Loading,
});

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
    { path: 'inbox', component: Inbox },
  ]
}



ReactDOM.render(<ParamsExample/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
