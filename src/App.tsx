import React from 'react';
import './styles/App.css';
import Telegram from './components/Telegram/Telegram';
import LogInForm from './components/LogInForm/LogInForm';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './helpers/ProtectedRoute';


function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/telegram' element={
            <ProtectedRoute condition={localStorage.getItem('userLoggedIn') ? true : false}>
              <Telegram/>
            </ProtectedRoute>} />

          <Route path='/' element={<LogInForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
