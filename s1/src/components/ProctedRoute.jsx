import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
export default function ProctedRoute({children}) {
    let auth=false;
    const navigate=useNavigate()
    if(!auth){
     return <Navigate to="/sign-in"/>
    }
  return (
    <>
      {children
          }    </>
  )
}
