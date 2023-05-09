/* eslint-disable no-unused-vars */
import React, {FC} from 'react';
import style from './LogInForm.module.scss';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import { LogInSchema } from '../../schemas/LogInSchema';
import FormInput from '../Input/FormInput';

interface MyFormValues {
  email: string;
  password: string;
}



const LogInForm: FC = () => {
  const initialValues: MyFormValues = { email: '', password: '' };

  return (
    <div>
      <h1 className={style.h1}>Autorization</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LogInSchema}
        onSubmit={(values, actions) => {
          console.log(actions);
          actions.resetForm();
        }}    
      >
        {({isSubmitting}) => (
          <Form method='post' className={style.form}>

            <FormInput label='Email' id='email' name='email' type='email' placeholder='Email'/>

            <FormInput label='Password' id='password' name='password' type='password' placeholder='Password' />
           
            <button disabled={isSubmitting} type="submit">Log in</button>
          </Form>
        )
        }
      </Formik>
    </div>
  );
};


export default LogInForm;