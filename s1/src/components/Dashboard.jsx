import React from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'
import OrderHistory from './OrderHistory'
import BookedItems from './BookedItems'

export default function Dashboard() {
  return (
    <>
    <div className='dashbord-container'>
     <Sidebar/>
     {/* <Profile/> */}
     {/* <OrderHistory/> */}
     <BookedItems/>
     </div> 
    </>
  )
}
