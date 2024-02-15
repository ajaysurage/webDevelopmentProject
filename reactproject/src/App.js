import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Navbar from './components/navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer'
import Contact from './components/contact'
import Profile from './components/profile'
import Login from './components/login'
import './App.css'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App