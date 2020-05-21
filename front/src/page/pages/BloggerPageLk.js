import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CurrentTender from '../../conteiner/CurrentTender';
import Menu from '../../components/BloggerLk/Menu';
import MainPage from '../../components/BloggerLk/MainPage';
import LogoutBlock from '../../components/BloggerLk/LogoutBlock';
import '../../css/bloggerLk.css';

export default class BloggerPageLk extends Component {
  render() {
    return (
      <>
        <div className="content-lk-blog">
          <Menu />
          <MainPage />
          <LogoutBlock />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1>Main page</h1>}
          />
        </Switch >
      </>
    )
  }
}
