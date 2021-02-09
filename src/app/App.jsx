import React, { Component } from 'react';
import './App.css';
import Header from './../components/header/Header';

export default class App extends Component {
   render() {
      return (
         <div className='app__container'>
            <Header />
         </div>
      );
   };
};
