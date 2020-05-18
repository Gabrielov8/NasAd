import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar1 from './conteiner/nav/Navbar1';


ReactDOM.render(
  <Provider store={store}>
    <Navbar1 />
  </Provider>,
  document.getElementById('root')
);

