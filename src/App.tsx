import React, { useState } from 'react';
import './styles/App.css';
import Telegram from './components/Telegram/Telegram';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './helpers/ProtectedRoute';
import MainPage from './components/MainPage/MainPage';
import SignUpPage from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import { useTypedSelector } from './hooks/useTypedSelector';


function App() {

  const {authId} = useTypedSelector(state => state.auth);
  console.log(authId);
  
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [textModal, setTextModal] = useState<string>('');
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/telegram' element={
            <ProtectedRoute condition={!!authId}>
              <Telegram isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} setTextModal={setTextModal} textModal={textModal}/>
            </ProtectedRoute>} />
          <Route path='/' element={<MainPage />} />
          <Route path='/signIn' element={<SignInForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>} />
          <Route path='/signUp' element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
