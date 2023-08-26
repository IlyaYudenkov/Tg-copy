import React, { FC } from 'react';
import cls from './SignUpForm.module.scss';
import { Form, Formik } from 'formik';
import FormInput from '../FormInput/FormInput';
import Button from '../../helpers/UI/Button';
import { urlUsers } from '../../url/url';
import { SignUpSchema } from '../../schemas/SignUpSchema';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


interface SignUpValues {
  name: string,
  email: string
  password: string,
  confirmPassword: string
}

const SignUpForm: FC = ({ }) => {
  const initialValues: SignUpValues = { name: '', email: '', password: '', confirmPassword: '' };

  const navigate = useNavigate();

  return (
    <div className={cls.SignUpPage}>
      <h1 className={cls.h1}>Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={(values, actions) => {
          axios.post(urlUsers, {
            name: values.name,
            email: values.email,
            password: values.password
          },
           {
            headers: {
              'Content-Type': 'application/json'
            }
            
          }).then((response) => {
            localStorage.setItem('userLoggedIn', String(response.data.id));
            navigate('/telegram');   
          });
          actions.resetForm();
        }}>
        {({ }) => (

          <Form method='post' className={cls.form}>
            <FormInput label='Name' id='name' name='name' type='text' placeholder='Name' />
            <FormInput label='Email' id='email' name='email' type='email' placeholder='Email' />
            <FormInput label='Password' id='password' name='password' type='password' placeholder='Password' />
            <FormInput label='Confirm password' id='Confirm password' name='confirmPassword' type='password' placeholder='Confirm password' />
         
            <Button text='Sign Up' navigate='' />
          </Form>
        )
        }
      </Formik>
    </div>
  );
};
export default SignUpForm;