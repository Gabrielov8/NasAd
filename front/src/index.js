import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './conteiner/nav/Navbar';


ReactDOM.render(
  <Provider store={store}>
    <Navbar />
  </Provider>,
  document.getElementById('root')
);

