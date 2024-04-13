import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Feedback from './components/Feedback'
import ErrorPage from './components/ErrorPage'
import { Outlet } from "react-router-dom";
import AuthProvider, { Store } from './store/AuthProvider'
import ProctedRoute from './components/ProctedRoute'
import {Navigate} from 'react-router-dom'
export default function App() {
  const {user,fetching}=useContext(Store)
  // useEffect(()=>{
  //   console.log(fetching)
  // },[])
  return (
    <>
    <AuthProvider>
    <ProctedRoute>
    <Header/>
    <Outlet/>
    <Footer/>
    </ProctedRoute>
    </AuthProvider>
    </>
  )
}
