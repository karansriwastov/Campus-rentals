import React, { useEffect, useState } from 'react'
import { itemsDb } from './Firebase'
import { getDocs,collection } from 'firebase/firestore'
import CardProvider from './CardProvider';
import ItemLoader from './ItemLoader';
async function rentItems(){
    const querySnapshot=await getDocs(collection(itemsDb,"rent"));
    const rentArr=[];
    querySnapshot.forEach((doc) => {
      rentArr.push({id:doc.id,...doc.data()})
    });
    return rentArr
}
export default function RentCard() {
  const [load,setLoad]=useState(false)
  const [items,newItems]=useState([]);
  const [show,setShow]=useState(false)
  useEffect(()=>{
    setLoad(true)
      async function fetchData(){
          const data=await rentItems()
        newItems(data)
      setLoad(false)
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
       <h3 className={`display-5 mx-3 my-3 sub-head`}>Rental categories</h3>
    <button class={`btn btn-warning view-btn`} onClick={()=>handleView()}>{show?"Show less":"View all"}</button>
    <div>
    {load?<ItemLoader/>: items?<div className={`container my-3 category`}>
      {NewItems.map((item)=><CardProvider item={item}></CardProvider>)}
      </div>:<Message/>}
      </div>
      <hr/>
    </>
  )
}
