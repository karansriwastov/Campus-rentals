import React from 'react'
import AuthProvider from './store/AuthProvider'
import Cart from './components/Cart'

export default function Provider() {
  return (
    <AuthProvider>
      <Cart/>
    </AuthProvider>
  )
}
