import React from 'react';
import './styles/App.css';
import Telegram from './components/Telegram/Telegram';
import LogInForm from './components/LogInForm/LogInForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LogInForm />} />
          <Route path='/telegram' element={<Telegram />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
