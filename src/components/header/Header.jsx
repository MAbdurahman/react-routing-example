import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './Header.css';
import HomePage from './../../pages/home-page/HomePage';
import GithubUser from './../github-user/GithubUser';
import NotFoundPage from './../../pages/not-found-page/NotFoundPage';

export default class Header extends Component {
   render() {
      return (
         <BrowserRouter>
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route path='/github' component={GithubUser} />
               <Route path='/*' component={NotFoundPage} />
            </Switch>
         </BrowserRouter>
      );
   };
};
