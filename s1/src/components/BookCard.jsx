import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { itemsDb } from './Firebase'
import CardProvider from './CardProvider';
const GetBook=async()=>{
    const querySnapshot= await getDocs(collection(itemsDb,"booking"));
    const BookItems=[];
    querySnapshot.forEach((doc)=>{
        BookItems.push({id:doc.id,...doc.data()})
    })
    return BookItems
}
export default function BookCard() {
    const [items,newItems]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const data=await GetBook();
            newItems(data)
        }
        fetchData()
    },[])
    console.log(items)
  return (
    <>
      <h3 className={`display-5 mx-3 my-3 sub-head`}>Booking categories</h3>
    <a href="#" class={`btn btn-warning view-btn`}>view all</a>
    <div className={`container my-3 category`}>
      {items.map((item)=><CardProvider item={item}></CardProvider>)}
      </div>
      <hr/> 
    </>
  )
}
