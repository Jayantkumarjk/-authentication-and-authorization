import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import User from './pages/User'
import Navbar from './components/Navbar'

function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/users' element={<User/>} />
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
