import React from 'react';
import { Route } from 'react-router-dom';
import CurrentUser from './conteiner/CurrentUser';
import Main from './conteiner/Main'
import NavBar from './components/NavBar';
import RegForm from './conteiner/RegForm';
import Advertiser from './conteiner/Advertiser';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route path="/" exact component={Main} />
      <Route path="/regform" exact component={RegForm} />
      <Route path="/users/:id" exact component={CurrentUser} />
      <Route path="/org/:id" exact component={Advertiser} />
    </div>
  );
}

export default App;
