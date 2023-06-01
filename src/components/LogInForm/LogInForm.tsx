/* eslint-disable no-unused-vars */
import React, { FC, useState } from 'react';
import style from './LogInForm.module.scss';
import {
  Formik,
  Form,
} from 'formik';
import { LogInSchema } from '../../schemas/LogInSchema';
import FormInput from '../FormInput/FormInput';
import useSWR from 'swr';
import { IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import { urlUsers } from '../../url/url';


interface MyFormValues {
  email: string;
  password: string;
}


const LogInForm: FC = () => {
  const initialValues: MyFormValues = { email: '', password: '' };

  const [correctData, setCorrectData] = useState(false);

  const { data: users, error } = useSWR<IUser[]>(urlUsers, fetcher);
  return (
    <div>
      <h1 className={style.h1}>Autorization</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LogInSchema}
        onSubmit={(values, actions) => {

          users && users.map(user => {
            if (user.email === values.email && user.password === values.password) {
              window.location.assign('/telegram');
              setCorrectData(true);
              actions.resetForm();
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
            {!correctData && !isSubmitting ? '' : <div className={style.formAlert}>Enter a correct data</div>}

            {!error ? <button type="submit">Log in</button> : <div className={style.errorMessage}>{error.message}</div>}
          </Form>
        )
        }
      </Formik>
    </div>
  );
};


export default LogInForm;