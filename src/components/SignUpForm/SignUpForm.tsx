import React, { FC } from 'react';
import cls from './SignUpForm.module.scss';
import { Form, Formik } from 'formik';
import FormInput from '../FormInput/FormInput';
import Button from '../../helpers/UI/Button';
import { urlUsers } from '../../url/url';
import { SignUpSchema } from '../../schemas/SignUpSchema';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SignUpValues } from '../../types/types';
import { useDispatch } from 'react-redux';
import { setAuthId } from '../../store/reducers/authReducer';


const SignUpForm: FC = () => {

  const initialValues: SignUpValues = { name: '', email: '', password: '', confirmPassword: '' };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={cls.SignUpPage}>
      <h1 className={cls.h1}>
        Registration
      </h1>
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
            })
            .then((res) => {
              dispatch(setAuthId(res.data.id));
              localStorage.setItem('userLoggedIn', String(res.data.id));
              navigate('/telegram');
            });
          actions.resetForm();
        }}>
        {({ errors, touched }) => (
          <Form method='post' className={cls.form}>
            <FormInput label='Name' id='name' name='name' type='text' placeholder='Name' />

            <FormInput label='Email' id='email' name='email' type='email' placeholder='Email' />

            <FormInput label='Password' id='password' name='password' type='password' placeholder='Password' />

            <FormInput label='Confirm password' id='Confirm password' name='confirmPassword' type='password' placeholder='Confirm password' />

            {errors.name && touched.name || errors.email && touched.email || errors.password && touched.password || errors.confirmPassword && touched.confirmPassword ? <p className={cls.formAlert}>Enter the correct required data</p> : null}

            <div className={cls.button}>
              <Button text='Sign Up' />
            </div>
          </Form>
        )
        }
      </Formik>
    </div>
  );
};
export default SignUpForm;