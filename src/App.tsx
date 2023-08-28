import React from 'react';
import './styles/App.css';
import Telegram from './components/Telegram/Telegram';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './helpers/ProtectedRoute';
import MainPage from './components/MainPage/MainPage';
import SignUpPage from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import { userOwner } from './helpers/userOwner';


function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/telegram' element={
            <ProtectedRoute condition={!!userOwner}>
              <Telegram/>
            </ProtectedRoute>} />
          <Route path='/' element={<MainPage />} />
          <Route path='/signIn' element={<SignInForm />} />
          <Route path='/signUp' element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
