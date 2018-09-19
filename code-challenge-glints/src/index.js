import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// // import { combineReducers, createStore } from 'redux';
// // import {Provider} from 'react-redux';
// // import product from './View/product';
// // import user from './View/user';

// const allReducers = combineReducers({
//     products: product,
//     user: user
// });

// const store = createStore(
//     allReducers,
//     {
//         products: [{ name: 'iPhone' }],
//         user: 'Michael'
//     },
//     window.devToolsExtension && window.devToolsExtension()
// );

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
