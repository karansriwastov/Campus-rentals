import { createContext, useContext, useState } from "react";
import React from 'react'
import { auth, itemsDb } from "../components/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs,doc } from "firebase/firestore";
export const Store=createContext({
    createUser:()=>{},
    CallItems:async()=>{
      const data= await getDocs(collection(itemsDb,"books"))
      const Items=[];
      data.forEach(doc => {
        Items.push(doc.data())
      });
      return Items
    }
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