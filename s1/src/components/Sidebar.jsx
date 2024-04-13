import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
export default function Sidebar({setOpen}) {
  const [currPage,upPage]=useState("")
  return (
    <>
     <div class="d-flex flex-column flex-shrink-0 p-3" style={{backgroundColor:'#1C1678'}}>
      <div onClick={()=>setOpen(false)}><FaArrowLeft className='arrow'/></div>
    <hr style={{color:'whitesmoke'}}/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <Link to="/dashboard" class={`nav-link text-white ${currPage==="profile" && 'active'}`} aria-current="page" onClick={()=>{upPage("profile")}}>
          profile Settings
        </Link>
      </li>
      <li>
        <Link to="/dashboard/order-history" class={`nav-link text-white ${currPage==="order" && 'active'}`} onClick={()=>{upPage("order")}}>
          Order history
        </Link>
      </li>
      <li>
        <Link to="/dashboard/booking-history" class={`nav-link text-white ${currPage==="book" && 'active'}`} onClick={()=>{upPage("book")}}>
          booking history
        </Link>
      </li>
    </ul>
    </div>
    </>
  )
}
