import { createContext, useContext, useState } from "react";
import React from 'react'
import { auth } from "../components/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const Store=createContext({
    createUser:()=>{},
});
const createUser=()=>{
    console.log("called")
}
export default function AuthProvider({children}) {
  return (
    <Store.Provider value={{
        createUser}}>
      {children}
    </Store.Provider>
  )
}

export const useAuth=()=>{
    return useContext(Store)
}