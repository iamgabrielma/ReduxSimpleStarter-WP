import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';

import App from './components/app';

//import PostDetails from './components/post_details';
//import PostDetailsTwo from './components/post_details_two';
//import Picture from './components/post_details_two';
//import Quote from './components/post_details_two';
//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
//ReactDOM.render(<App/> , document.querySelector('.container'));
//ReactDOM.render(<App dataURL="https://www.osomstore.com/wp-json/wp/v2/posts/" />, document.querySelector('.container'));
//ReactDOM.render(<SearchBar/> , document.querySelector('.post-details'));
//ReactDOM.render(<PostDetails/> , document.querySelector('.post-details'));
//ReactDOM.render(<PostDetailsTwo/> , document.querySelector('.post-details-two'));
//ReactDOM.render(<Picture/> , document.querySelector('.post-details-two'));
//ReactDOM.render(<Quote/> , document.querySelector('.post-details-two'));

//ReactDOM.render(<App dataURL="http://walden.dev/wp-json/wp/v2/posts" />, document.getElementById('content'));

ReactDOM.render(<App/>, document.querySelector('.container'));