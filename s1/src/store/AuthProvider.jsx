import { createContext, useState } from "react";
import React from 'react'
const Store=createContext();
const [currUser,newUser]=useState();
const [loading,setLoading]=useState(false);
export default function AuthProvider({children}) {
  return (
    <Store.Provider>
      {children}
    </Store.Provider>
  )
}
