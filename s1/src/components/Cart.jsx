import React, { useContext, useEffect, useState } from 'react'
import AuthProvider, { Store } from '../store/AuthProvider'
import Hero from './Hero'
export default function Cart() {
  const [presentCart,newCart]=useState([])
  const {cartItemProvider,AddItemsToCart,getCart}=useContext(Store)
  useEffect(()=>{
    function fetchCart(){
      const items=cartItemProvider();
      newCart(items)
    }
    fetchCart()
  },[])
  useEffect(()=>{
    const fetchData=async()=>{
      const items=await getCart()
      console.log(items)
      newCart(items)
    }
    fetchData()
  },[])
  return (
    <>
      <div className='container border my-5'>
    <h2 className='display-5 text-bold fw-semibold'>Cart</h2>
    {presentCart && presentCart.map((item)=>
      <div class="card mx-3 my-3 order-card" style={{minwidth: "20rem"}}>
  <img src="..." class="card-img-top px-3 py-3" alt="..."/>
  <div class="card-body">
    <ul class="" style={{minWidth:"50rem"}}>
    
    <li class="list-group-item"><h5 class="card-title ">{item.itemName}</h5></li>
  <li class="list-group-item">type:-{item.type}</li>
  <li class="list-group-item">price:-{item.price}</li>
  <li class="list-group-item">Owner name:-rahul</li>
  <li class="list-group-item">Owner number:-9087837763</li>
  <a href="#" class="btn btn-primary  mx-2">{item.type==="rent"?"rent":"book"}</a>
</ul>
  </div>
</div>
    )}
</div>
    </>
  )
}
