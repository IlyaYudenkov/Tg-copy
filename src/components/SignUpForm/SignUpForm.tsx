import React, { FC, useState } from 'react';
import cls from './SignUpForm.module.scss';
import { Form, Formik } from 'formik';
import FormInput from '../FormInput/FormInput';
import Button from '../../helpers/UI/Button';
import { LogInSchema } from '../../schemas/LogInSchema';
import { fetcher } from '../../helpers/fetcher';
import { urlUsers } from '../../url/url';
import { IUser } from '../../types/types';
import useSWR from 'swr';


interface SignUpValues {
    name: string,
    email: string
    password: string,
    confirmPassword: string
}

const SignUpForm: FC = ({ }) => {
    const initialValues: SignUpValues = { name: '', email: '', password: '', confirmPassword: '' };
    const [correctData, setCorrectData] = useState(false);
    const { data: users, error } = useSWR<IUser[]>(urlUsers, fetcher);
    return (
      <div className={cls.SignUpPage}>
        <h1 className={cls.h1}>Registration</h1>
        <Formik
                initialValues={initialValues}
                validationSchema={LogInSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                }}>
          {({ isSubmitting }) => (

            <Form method='post' className={cls.form}>
              <FormInput label='Name' id='name' name='name' type='text' placeholder='Name' />
              <FormInput label='Email' id='email' name='email' type='email' placeholder='Email' />
              <FormInput label='Password' id='password' name='password' type='password' placeholder='Password' />
              <FormInput label='Confirm password' id='Confirm password' name='Confirm password' type='password' placeholder='Confirm password' />
              {!correctData && !isSubmitting ? '' : <div className={cls.formAlert}>Enter a correct data</div>}

              {!error ? <Button text='Sign Up' /> : <div className={cls.errorMessage}>{error.message}</div>}
            </Form>
                )
                }
        </Formik>
      </div>
    );
};
export default SignUpForm;