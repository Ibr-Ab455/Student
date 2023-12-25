// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Courses from './pages/Courses'

function App() {
  

  return (
    <>
     <Router>
      {/* Header */}
        <Navbar/>
        
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/login" element={<LogIn/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/courses" element={<Courses/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
