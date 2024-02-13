import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Frontend/Pages/Home'
import About from './Frontend/Pages/About'
import Contact from './Frontend/Pages/Contact'
import Error from './Frontend/Pages/Error'
import MainHeader from './Frontend/Pages/MainHeader'
import Login from './Frontend/Pages/Login'
import Signup from './Frontend/Pages/Signup'
import Forgot from './Frontend/Pages/Forgot'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot' element={<Forgot />} />

          <Route path='/user' element={<MainHeader />} >
            <Route path='/user/home' element={<Home />} />
            <Route path='/user/about' element={<About />} />
            <Route path='/user/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Route>

        </Routes>
      </BrowserRouter >
    </>

  )
}

export default App