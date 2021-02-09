import React, { Component } from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import './HomePage.css';

export default class HomePage extends Component {
   render() {
      return (
         <Container className='homepage'>
            <Jumbotron>
               <h1 className='homepage__title'>Github Users</h1>
               <p className='homepage__description'>
                  Use an Awesome Tool to help build, collaborate, and grow.
               </p>
               <p className='homepage__buttonContainer'>
                  <Button
                  className='homepage__button'
                  >
                     Explore more
                  </Button>
               </p>
            </Jumbotron>
         </Container>
      );
   };
};
