import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import { Home } from './pages/Home';
import { Register } from './pages/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  </BrowserRouter>
)
