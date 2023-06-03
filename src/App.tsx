import React from 'react';
import './styles/App.css';
import Telegram from './components/Telegram/Telegram';
import LogInForm from './components/LogInForm/LogInForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const userLoggedIn = localStorage.getItem('userLoggedIn');

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {userLoggedIn && <Route path='/telegram' element={<Telegram />}/>}

          <Route path='/' element={<LogInForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
