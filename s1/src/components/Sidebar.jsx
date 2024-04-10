import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [currPage,upPage]=useState("profile")
  return (
    <>
     <div class="d-flex flex-column flex-shrink-0 p-3" style={{width: '280px',minHeight:'30rem',backgroundColor:'#1C1678'}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" previewlistener="true">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Dashboard</span>
    </a>
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
