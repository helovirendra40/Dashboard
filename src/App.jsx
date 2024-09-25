import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className='main-container'>
        <Navbar />
        <div className='rightSide'>
          <Header />
          <Dashboard />
        </div>
      </div>
      
    </div>
  )
}

export default App
