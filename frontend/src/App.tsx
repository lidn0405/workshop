// import { useState } from 'react'
import './stylesheets/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import LayoutPage from './pages/Layout/LayoutPage';
import HomePage from './pages/Home/HomePage';
import ProfilePage from './pages/Profile/ProfilePage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Login/SignupPage';
import { WorkshopPage } from './pages/Workshop/WorkshopPage';
import { DefaultPage } from './pages/DefaultPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/workshop/:id' element={<WorkshopPage/>}/>
          <Route path='*' element={<DefaultPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
