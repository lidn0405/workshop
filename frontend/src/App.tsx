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
import { ExplorePage } from './pages/Explore/ExplorePage';
import { WorkshopLayout } from './pages/Workshop_Layout/WorkshopLayout';
import { WorkshopContent } from './pages/WorkshopContent/WorkshopContent';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        {/* Main Pages */}
        <Route element={<LayoutPage/>}>
          <Route path='/' element={<HomePage/>} />
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/workshop/:workshop_id' element={<WorkshopPage/>}/>
          <Route path='/explore' element={<ExplorePage/>}/>
        </Route>

        {/* Workshop Pages */}
        <Route element={<WorkshopLayout/>} path='/content/:workshop_id'>
          <Route path=':topic_id' element={<WorkshopContent/>}/>
        </Route>
        <Route path='*' element={<DefaultPage/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
