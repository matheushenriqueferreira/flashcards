import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//pages
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { NewCollection } from './pages/NewCollection';
import { EditCollection } from './pages/EditCollection';
import { Collection } from './pages/Collection';
import { NewCard } from './pages/NewCard';
import { EditCard } from './pages/EditCard';
import { Play } from './pages/Play';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/newCollection' element={<NewCollection/>} />
          <Route path='/editCollection' element={<EditCollection/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/newCard' element={<NewCard/>} />
          <Route path='/editCard' element={<EditCard/>} />
          <Route path='/play' element={<Play/>} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
