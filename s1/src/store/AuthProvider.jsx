import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
import { auth, itemsDb } from "../components/Firebase";
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { collection, getDocs,doc, addDoc, deleteDoc } from "firebase/firestore";
import {Navigate} from 'react-router-dom'
export const Store=createContext({
    CallItems:async()=>{
      const data= await getDocs(collection(itemsDb,"books"))
      const Items=[];
      data.forEach(doc => {
        Items.push(doc.data())
      });
      return Items
    },
    cartItemProvider:()=>{},
    AddItemsToCart:()=>{},
    getCart:()=>{},
    userChecker:()=>{},
    user:{},
    cartNumProvider:()=>{
    },
    handleDelete:()=>{},
});
const createUser=()=>{
    console.log("called")
}
export default function AuthProvider({children}) {
  const [cartNum,newNum]=useState(0)
 const [Cart,Addtocart]=useState([])
 const getCart=async ()=>{
  const data=await getDocs(collection(itemsDb,"cart"))
  const items=[];
  data.forEach(doc=>{
    items.push({id:doc.id,...doc.data()})
  })
  return items
}
let [user,setUser]=useState(null)
const [fetching,setFetching]=useState(true)
const userChecker=()=>{
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(user)=>{
        if(user){
          setUser(user)
          setFetching(false)
          return;
        }
        setUser(null)
        setFetching(false)
    })
    return ()=>unSubscribe()
  },[])
}
 const cartItemProvider=(item)=>{
  if(item!==undefined){
    const newItems=[...Cart,item]
  console.log(item)
  Addtocart(newItems)
  }
  return Cart
  
}
const AddItemsToCart=async(item)=>{
  if(item!==undefined){
    newNum(cartNum+1)
  const dbId=await addDoc(collection(itemsDb,"cart"),item)
  }
}
const cartNumProvider=()=>{
  return cartNum
}
const handleDelete=async (type,item)=>{
 await deleteDoc(doc(itemsDb,"cart",item))
}
  return (
    <Store.Provider value={{
        cartItemProvider,AddItemsToCart,getCart,userChecker,cartNumProvider,user,fetching,handleDelete}}>
      {children}
    </Store.Provider>
  )
}