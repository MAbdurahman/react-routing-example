import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './ContactPage.css';

export default class ContactPage extends Component {


   render() {
      const name_pattern = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i;
      const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const required_message_length = 30;
      const max_message_length = 101;

      return (
         <div className='contactPage'>
            <h2 className='contactPage__heading'>Contact Us</h2>
            <Formik
               initialValues={{ name: '', email: '', message: '' }}
               validate={values => {
                  let errors = {};
                  if (!values.name) {
                     errors.name = 'First and last name required!';

                  } else if (!name_pattern.test(values.name)) {
                     errors.name = 'Enter first and last name only!';

                  }
                  if (!values.email) {
                     errors.email = 'Email is required!';

                  } else if (!email_pattern.test(values.email)) {
                     errors.email = 'Enter a valid email address!';
                  }

                  if (!values.message) {
                     errors.message = 'Message is required!';

                  } else if (required_message_length > values.message.length) {
                     let charactersLeft = (required_message_length - values.message.length);
                     errors.message = `${charactersLeft} more characters required in message!`;

                  } else if (values.message.length > max_message_length) {
                     let tooMany = (values.message.length - max_message_length);
                     errors.message = `Message has ${tooMany} character(s) too many!`;
                  }

                  return errors;
               }}
               onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     resetForm({});
                     setSubmitting(false);
                  }, 500);
               }}
            >
               {({ isSubmitting }) => (
                  <Form>
                     <div>
                        <Field
                           as='input'
                           type='text'
                           name='name'
                           placeholder='first and last name'
                        />
                        <ErrorMessage name='name' component='span' />
                     </div>
                     <div>
                        <Field
                           as='input'
                           type='email'
                           name='email'
                           placeholder='email address'
                        />
                        <ErrorMessage name='email' component='span' />
                     </div>
                     <div>
                        <Field
                           className='contactPage__message'
                           as='textarea'
                           type='text'
                           name='message'
                           placeholder='message'
                        />
                        <ErrorMessage name='message' component='span' />
                     </div>
                     <button className='contactPage__button' type='submit' disabled={isSubmitting}>
                        Send message
                     </button>
                  </Form>
               )}
            </Formik>
         </div >
      );
   };
};
