import React, { useRef, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { app, itemsDb } from './Firebase';
import {Navigate, useNavigate} from 'react-router-dom'
import BtnLoader from './BtnLoader';
export default function SellItem() {
  const [startLoad,stopLoad]=useState("stop")
    const itemName=useRef();
    const category=useRef();
    const price=useRef();
    const description=useRef();
    const sellImage=useRef();
    const navigate=useNavigate()
    const type=useRef()
    const handleSellItem=async()=>{
      stopLoad("start")
           const dbId=await addDoc(collection(itemsDb,type.current.value),{
            itemName:itemName.current.value,
            // category:category.current.value,
            price:price.current.value,
            description:description.current.value,
           })
           stopLoad("stop")
    }
  return (
    <>
    <Header/>
      <div className='container border border-radius-30 mx-5 my-5 px-3 py-3'>
      <h2 className='display-5 fw-semibold'>Sell item</h2>
      <div className='container px-5 py-5'>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fw-medium">Item name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="please enter item name" ref={itemName}/>
</div>
<div class="form-label mb-3">
  <label class=" fw-semibold" for="inputGroupSelect01">type</label>
  <select class="form-select inp" id="inputGroupSelect01" ref={type}>
    <option value="rent">rent</option>
    <option value="booking">booking</option>
  </select>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fw-medium">price</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="please enter price in ₹" ref={price}/>
</div>
<div class=" mb-3">
<label for="exampleFormControlInput1" class="form-label fw-medium">upload image(if any)</label>
  <input type="file" class="form-control" id="inputGroupFile01 "ref={sellImage}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fw-medium">Description</label>
  <textarea type="text" class="form-control row-5" id="exampleFormControlInput1" placeholder="please enter description for item" ref={description}/>
</div>
      {startLoad==="start"?<BtnLoader type={"btn-warning"}/>:<button type='button' className='btn btn-warning' onClick={()=>handleSellItem()}>Sell item</button>}
      </div>
      </div>
      <Footer/>

    </>
  )
}
