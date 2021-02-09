import React, { Component } from 'react';
import './GithubUser.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class GithubUser extends Component {

   constructor() {
      super();
      this.state = {
         data: [],
         searchTerm: '',
         isLoading: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
      this.setState({
         searchTerm: e.target.value
      })
   };

   handleSubmit(e) {
      e.preventDefault();
      this.setState({
         isLoading: true
      });
      this.getGitHubData(this.state.searchTerm);
   };

   getGitHubData(_searchTerm) {
      axios
         .get('https://api.github.com/search/users?q=' + _searchTerm)
         .then(res => {
            this.setState({
               isLoading: false,
               data: res.data.items
            })
            console.log(res.data.items);
            this.setState({
               searchTerm: ''
            })
         })
         .catch(err => console.error(err));
   };

   render() {
      const listUsers = this.state.data.map(user =>
         <Media className='githubMedia' key={user.id}>
            <a href={user.html_url}>
               <img
                  className='mr-3'
                  src={user.avatar_url}
                  alt='Generic placeholder'
                  width={81}
                  height={81}
               />
            </a>
            <Media.Body className='githubMediaBody'>
               <h5>Login:  {user.login}</h5>
               <p>Id:  {user.id}</p>
            </Media.Body>
         </Media>
      );
      return (
         <div className='github'>
            <Form className='githubForm' onSubmit={this.handleSubmit}>
               <FormGroup controlId='formInlineName'>
                  <FormControl
                     className='githubInput'
                     type='text'
                     value={this.state.searchTerm}
                     placeholder='Enter github user'
                     onChange={this.handleChange}
                  />
                  <Button className='githubButton' type='submit'>Search</Button>
               </FormGroup>

            </Form>
            <section className='githubSection'>
               <h3 className='githubSubheading'>GitHub Users Results</h3>
               {this.state.isLoading &&
                  <ReactLoading
                     className='githubLoader'
                     type='spinningBubbles'
                     color='#444'
                     height='10%'
                     width='10%'
                  />}
               {listUsers}
            </section>

         </div>
      );
   };
};
