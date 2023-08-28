import React, { FC, useState } from 'react';
import style from './SignInForm.module.scss';
import {
  Formik,
  Form,
} from 'formik';
import { SignInSchema } from '../../schemas/SignInSchema';
import FormInput from '../FormInput/FormInput';
import useSWR from 'swr';
import { IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import { urlUsers } from '../../url/url';
import { useNavigate } from 'react-router-dom';
import Button from '../../helpers/UI/Button';


interface MyFormValues {
  email: string;
  password: string;
}


const SignInForm: FC = () => {

  const navigate = useNavigate();

  const initialValues: MyFormValues = { email: '', password: '' };

  const [correctData, setCorrectData] = useState(false);

  const { data: users, error } = useSWR<IUser[]>(urlUsers, fetcher);


  return (
    <div>
      <h1 className={style.h1}>Autorization</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values, actions) => {
          users && users.map(user => {
            if (user.email === values.email && user.password === values.password) {
              localStorage.setItem('userLoggedIn', String(user.id));
              setCorrectData(true);
              actions.resetForm();
              navigate('/telegram');
            }
            else {
              setCorrectData(false);
            }
            
          });
        }}>
        {({ isSubmitting }) => (

          <Form method='post' className={style.form}>

            <FormInput label='Email' id='email' name='email' type='email' placeholder='Email' />

            <FormInput label='Password' id='password' name='password' type='password' placeholder='Password' />

            {!correctData && !isSubmitting ? '' : <p className={style.formAlert}>Enter a correct data</p>}

            {!error ? <Button text='Sign In' /> : <p className={style.errorMessage}>{error.message}</p>}
          </Form>
        )
        }
      </Formik>
    </div>
  );
};


export default SignInForm;