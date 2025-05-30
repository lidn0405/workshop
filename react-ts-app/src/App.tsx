// import { useState } from 'react'
import './stylesheets/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
