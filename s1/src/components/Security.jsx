import React, { useContext, useEffect, useState } from 'react'
import AuthProvider, { Store } from '../store/AuthProvider'
import App from '../App'
import ProctedRoute from './ProctedRoute'
import {Navigate,Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
export default function Security() {
    const {user}=useContext(Store)
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
