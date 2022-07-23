import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

//pages
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
