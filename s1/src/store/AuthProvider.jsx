import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
import { auth, itemsDb } from "../components/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs,doc, addDoc } from "firebase/firestore";
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
});
const createUser=()=>{
    console.log("called")
}
export default function AuthProvider({children}) {
 const [Cart,Addtocart]=useState([])
 const getCart=async ()=>{
  const data=await getDocs(collection(itemsDb,"cart"))
  const items=[];
  data.forEach(doc=>{
    items.push({id:doc.id,...doc.data()})
  })
  return items
}
 const cartItemProvider=(item)=>{
  if(item!==undefined){
    const newItems=[...Cart,item]
  console.log(item)
  Addtocart(newItems)
    // useEffect(()=>{
    //   const fetchData=async()=>{
    //     const items=await getCart()
    //     console.log(items)
    //   }
    //   fetchData()
    // },[])
  }
  return Cart
  
}
const AddItemsToCart=async(item)=>{
  if(item!==undefined){
  const dbId=await addDoc(collection(itemsDb,"cart"),item)
  }
}
  return (
    <Store.Provider value={{
        cartItemProvider,AddItemsToCart,getCart}}>
      {children}
    </Store.Provider>
  )
}