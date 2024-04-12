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
  const [show,setShow]=useState(false)
    const [items,newItems]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const data=await GetBook();
            newItems(data)
        }
        fetchData()
    },[])
    let NewItems=items;
  if(!show){
    NewItems=items.slice(0,3)
  }
  const handleView=()=>{
    setShow(!show)
  }
  return (
    <>
      <h3 className={`display-5 mx-3 my-3 sub-head`}>Booking categories</h3>
      <button class={`btn btn-warning view-btn`} onClick={()=>handleView()}>{show?"Show less":"View all"}</button>
    <div className={`container my-3 category`}>
      {NewItems.map((item)=><CardProvider item={item}></CardProvider>)}
      </div>
      <hr/> 
    </>
  )
}
