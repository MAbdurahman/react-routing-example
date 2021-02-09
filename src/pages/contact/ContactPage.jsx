import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './ContactPage.css';

export default class ContactPage extends Component {
   // constructor(props) {
   //    super(props);

   // }

   render() {
      const name_pattern = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i;
      const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,}$/i;
      const lowercase_pattern = /^(?=.*[a-z])/g;
      const uppercase_pattern = /^(?=.*[A-Z])/g;
      const digit_pattern = /^(?=.*\d{1,})/g;
      const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;
      // const message_pattern =/^(?={30,})$/i;

      return (
         <div className='contactPage'>
            <h2 className='contactPage__heading'>Contact Us</h2>
            <Formik
               initialValues={{ name: '', email: '', password: '' }}
               validate={values => {
                  let errors = {};
                  if (!values.email) {
                     errors.email = 'Email is required!';

                  } else if (!email_pattern.test(values.email)) {
                     errors.email = 'Invalid email address!';
                  }

                  if (!values.password) {
                     errors.password = 'Password is required!';

                  } else if (!lowercase_pattern.test(values.password)) {
                     errors.password = 'Password must have a lowercase character!';

                  } else if (!uppercase_pattern.test(values.password)) {
                     errors.password = 'Password must have an uppercase character!';

                  } else if (!digit_pattern.test(values.password)) {
                     errors.password = 'Password must have a digit character!';

                  } else if (!special_pattern.test(values.password)) {
                     errors.password = `Password must include at least one: '-+_!@#$%^&*?'`;

                  } else if (!password_pattern.test(values.password)) {
                     errors.password = 'Password must have at least 8 characters!';

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
                        as='textArea'
                           type='text'
                           name='message'
                           placeholder='message'
                        />
                        <ErrorMessage name='password' component='span' />
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
