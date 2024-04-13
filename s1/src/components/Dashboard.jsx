import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'
import OrderHistory from './OrderHistory'
import BookedItems from './BookedItems'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { MdMenuOpen } from "react-icons/md";
export default function Dashboard() {
  const [open,setOpen]=useState(false)
  const handleSide=()=>{
    setOpen(!open)
  }
  return (
    <>
    <Header/>
    <div className='dashbord-container'>
    {!open && <div onClick={()=>handleSide()}><MdMenuOpen className='dash-icon'/></div>}
     {open && <Sidebar setOpen={setOpen} />} 
     <Outlet/>
     </div> 
     <Footer/>
    </>
  )
}
