import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
)
