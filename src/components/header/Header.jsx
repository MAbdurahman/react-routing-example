import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Header.css';
import HomePage from './../../pages/home-page/HomePage';
import GithubUser from './../github-user/GithubUser';
import NotFoundPage from './../../pages/not-found-page/NotFoundPage';
import ContactPage from './../../pages/contact/ContactPage';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';

export default class Header extends Component {
   render() {
      return (
         <BrowserRouter>
            <div className='header'>
               <Navbar className='header__navigation' bg='dark' variant='dark' expand='lg'>
                  <Navbar.Brand className='header__brand' href='#home'>Brand Name</Navbar.Brand>
                  <div className='navbar__spacer'></div>
                  <Navbar.Toggle aria-controls='basic-navbar-nav' />
                  <Navbar.Collapse id='basic-navbar-nav' >
                     <Nav className='mr-auto header__list'>
                        <Nav.Link className='header__items' href='/'>Home</Nav.Link>
                        <Nav.Link className='header__items' href='/github'>Github</Nav.Link>
                        <Nav.Link className='header__items' href='/contact'>Contact</Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Navbar>
               <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/github' component={GithubUser} />
                  <Route path='/contact' component={ContactPage} />
                  <Route path='/*' component={NotFoundPage} />
               </Switch>
            </div>
         </BrowserRouter>
      );
   };
};
