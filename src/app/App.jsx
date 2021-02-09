import React, { Component } from 'react';
import NotFoundPage from '../pages/not-found-page/NotFoundPage';
import './App.css';

export default class App extends Component {
   render() {
      return (
         <div className='app__container'>
            <NotFoundPage />
         </div>
      );
   };
};
