import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import CardProvider from './CardProvider';
import { itemsDb } from './Firebase';
async function getData(){
    const querySnapshot=await getDocs(collection(itemsDb,"Featured"));
    const data=[];
    querySnapshot.forEach((doc)=>{
      data.push({id:doc.id,...doc.data()})
    })
    return data;
  }
export default function FeaturedCards() {
    const [items,newItems]=useState([])
useEffect(()=>{
  async function fetchData(){
    const data=await getData();
    newItems(data)
  }
  fetchData()
},[])
  return (
    <>
    <h3 className={`display-5 mx-3 my-3 sub-head`}>Featured categories</h3>
    <a href="#" class={`btn btn-warning view-btn`}>view all</a>
    <div className={`container my-3 category`}>
      {items.map((item)=><CardProvider item={item}></CardProvider>)}
      </div>
      <hr/>
    </>
  )
}
