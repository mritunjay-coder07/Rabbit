import { useState } from 'react'
import MainDashBoard from './components/MainDashBoard'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Routes,Route } from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path='/DashBoard' element={<MainDashBoard/>}/>
    </Routes>
  )
}

export default App
