import React, { Component } from 'react';
import './ContactPage.css';

export default class ContactPage extends Component {
   render() {
      return (
         <div className='contactPage'>
            <h2 className='contactPage__heading'>Contact Us</h2>
            <Form>
               <div>
                  <Field
                     type='email'
                     name='email'
                     placeholder='email address'
                  />
                  <ErrorMessage name='email' component='span' />
               </div>
               <div>
                  <Field
                     type='password'
                     name='password'
                     placeholder='password'
                  />
                  <ErrorMessage name='password' component='span' />
               </div>
               <button type='submit' disabled={isSubmitting}>
                  Submit
                     </button>
            </Form>
         </div>
      );
   };
};
