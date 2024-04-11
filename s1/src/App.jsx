import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Feedback from './components/Feedback'
import ErrorPage from './components/ErrorPage'
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
