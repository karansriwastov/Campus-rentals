import React from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'
import OrderHistory from './OrderHistory'
import BookedItems from './BookedItems'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
export default function Dashboard() {
  return (
    <>
    <Header/>
    <div className='dashbord-container'>
     <Sidebar/>
     <Outlet/>
     </div> 
     <Footer/>
    </>
  )
}
