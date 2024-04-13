import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import CardProvider from './CardProvider';
import { itemsDb } from './Firebase';
import Message from './Message';
import BtnLoader from './BtnLoader';
import ItemLoader from './ItemLoader';
async function getData(){
    const querySnapshot=await getDocs(collection(itemsDb,"Featured"));
    const data=[];
    querySnapshot.forEach((doc)=>{
      data.push({id:doc.id,...doc.data()})
    })
    return data;
  }
export default function FeaturedCards() {
  const [load,setLoad]=useState(false)
    const [items,newItems]=useState([])
useEffect(()=>{
  setLoad(true)
  async function fetchData(){
    const data=await getData();
    newItems(data)
    setLoad(false)
  }
  fetchData()
},[])
  return (
    <>
    <h3 className={`display-5 mx-3 my-3 sub-head`}>Featured categories</h3>
    <a href="#" class={`btn btn-warning view-btn`}>view all</a>
    <div>
    {load?<ItemLoader/>: items?<div className={`container my-3 category`}>
      {items.map((item)=><CardProvider item={item}></CardProvider>)}
      </div>:<Message/>}
      </div>
      <hr/>
    </>
  )
}
