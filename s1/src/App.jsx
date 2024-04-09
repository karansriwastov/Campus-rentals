import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <>
     <Header/> 
     {/* <Home/> */}
     <Dashboard/>
     <Footer/>
    </>
  )
}
