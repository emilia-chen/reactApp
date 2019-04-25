import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store.js';
import { addToCart }  from './actions/cart-actions';
import { Provider } from 'react-redux';

// const o1={a:{d:1},b:2}
// const o2={c:1,d:2}
// const o3={...o1,...o2}

// o1.a.d=555
// console.log('o1',o1)
// console.log('o2',o2)
// console.log('o3',o3)











let unsubscribe = store.subscribe(() =>
  console.log('unsubscribe',store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

unsubscribe();



ReactDOM.render(  <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
