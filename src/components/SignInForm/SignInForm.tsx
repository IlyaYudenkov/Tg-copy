import React, { FC, useState } from 'react';
import style from './SignInForm.module.scss';
import {
  Formik,
  Form,
  FormikHelpers,
} from 'formik';
import { SignInSchema } from '../../schemas/SignInSchema';
import FormInput from '../FormInput/FormInput';
import useSWR from 'swr';
import { IUser, MyFormValues } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import { urlUsers } from '../../url/url';
import { useNavigate } from 'react-router-dom';
import Button from '../../helpers/UI/Button';
import { useDispatch } from 'react-redux';
import { setAuthId } from '../../store/reducers/authReducer';


interface ISingInForm{
  isOpenModal: boolean,
  setIsOpenModal: (isOpenModal: boolean) => void
}


const SignInForm: FC<ISingInForm> = ({ setIsOpenModal }) => {

  //STATE
  const [correctData, setCorrectData] = useState<boolean>(false);

  const initialValues: MyFormValues = { email: '', password: '' };

  //HOOKS
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //API
  const { data: users, error } = useSWR<IUser[]>(urlUsers, fetcher);


  const handleLogIn = (values: MyFormValues, actions: FormikHelpers<MyFormValues>) => {
    const foundUser = users && users.find(user => user.email === values.email && user.password === values.password);
    if (foundUser) {
      dispatch(setAuthId(foundUser.id));
      setIsOpenModal(true);
      setCorrectData(true);
      actions.resetForm();
      navigate('/telegram');
    }
    else {
      setCorrectData(false);
    }
  };


  return (
    <div>
      <h1 className={style.h1}>
        Autorization
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values, actions) => handleLogIn(values, actions)}>
        {({ isSubmitting }) => (

          <Form method='post' className={style.form}>

            <FormInput label='Email' id='email' name='email' type='email' placeholder='Email' />

            <FormInput label='Password' id='password' name='password' type='password' placeholder='Password' />

            {!correctData && !isSubmitting ? '' : <p className={style.formAlert}>Enter a correct data</p>}

            {!error ? <Button text='Sign In' /> : <p className={style.errorMessage}>{error.message}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};


export default SignInForm;