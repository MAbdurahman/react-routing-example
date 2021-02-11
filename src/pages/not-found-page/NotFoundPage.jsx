import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './NotFoundPage.css';

export default class NotFoundPage extends Component {
   render() {
      return (
         <div className='notFoundPage'>
            <h1 className='notFoundPage__Title'>404</h1>
            <h2 className='notFoundPage__subTitle'>Oops!&nbsp; That page can’t be found.</h2>
            <h4 className='notFoundPage__description'>
               It looks like nothing was found at this location.
               Maybe try one of the links or press the back to home button.
            </h4>
            <Button className='notFoundPage__button'><a href='/'>Back to Home</a></Button>
         </div>
      );
   };
};
