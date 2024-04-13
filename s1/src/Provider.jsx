import React from 'react'
import AuthProvider from './store/AuthProvider'
import Cart from './components/Cart'
import Header from './components/Header'

export default function Provider() {
  return (
    <AuthProvider>
      <Cart/>
      <Header/>
    </AuthProvider>
  )
}
