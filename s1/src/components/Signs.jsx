import React from 'react'
import AuthProvider from '../store/AuthProvider'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Security from './Security'

export default function Signs() {
  return (
    <AuthProvider>
      <SignIn></SignIn>
      <SignUp/>
      <Security/>
    </AuthProvider>
  )
}
