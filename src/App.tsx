import React from 'react';
import './styles/App.css';
import Telegram from './components/Telegram/Telegram';
import LogInForm from './components/LogInForm/LogInForm';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {localStorage.getItem('userLoggedIn') ? <Route path='/telegram' element={<Telegram />}/> : <Route path="*" element={<Navigate to="/" />} />}
          <Route path='/' element={<LogInForm />} />         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
