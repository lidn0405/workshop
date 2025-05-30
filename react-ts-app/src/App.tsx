// import { useState } from 'react'
import './stylesheets/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
