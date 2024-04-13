import React, { Children, useContext } from 'react'
import {Navigate} from 'react-router-dom'
import Home from './Home'
import { Store } from '../store/AuthProvider'
import Security from './Security'
export default function ProctedRoute({Children}) {
  const {user,fetching,userChecker}=useContext(Store)
  console.log(user)
  if(fetching){
  userChecker()
  return;
  }
  return (
    <>
       {user?<Security></Security>:<Navigate to="/sign-in"/>}
    </>
  )
}
