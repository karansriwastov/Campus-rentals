import React, { useEffect, useState } from 'react'
import { itemsDb } from './Firebase'
import { getDocs,collection } from 'firebase/firestore'
import CardProvider from './CardProvider';
async function rentItems(){
    const querySnapshot=await getDocs(collection(itemsDb,"rent"));
    const rentArr=[];
    querySnapshot.forEach((doc) => {
      rentArr.push({id:doc.id,...doc.data()})
    });
    return rentArr
}
export default function RentCard() {
  const [items,newItems]=useState([]);
  useEffect(()=>{
      async function fetchData(){
        const data=await rentItems()
        newItems(data)
      }
      fetchData()
  },[])
  console.log(items)
  return (
    <>
       <h3 className={`display-5 mx-3 my-3 sub-head`}>Rental categories</h3>
    <a href="#" class={`btn btn-warning view-btn`}>view all</a>
    <div className={`container my-3 category`}>
      {items.map((item)=><CardProvider item={item}></CardProvider>)}
      </div>
      <hr/>
    </>
  )
}
