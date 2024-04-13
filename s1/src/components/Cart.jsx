import React, { useContext, useEffect, useState } from 'react'
import AuthProvider, { Store } from '../store/AuthProvider'
import Hero from './Hero'
export default function Cart() {
  const [presentCart,newCart]=useState([])
  const {cartItemProvider,AddItemsToCart,getCart,handleDelete}=useContext(Store)
  useEffect(()=>{
    async function fetchCart(){
      const items=await cartItemProvider();
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
      <div class="card mx-3 my-3 order-card">
  <img src={item.img} class="card-img-top px-3 py-3" alt="..." height={"200"} width={"100"}/>
  <div class="card-body">
    <ul class="" style={{minWidth:"50rem"}}>
    <li class="list-group-item"><h5 class="card-title ">{item.itemName}</h5></li>
  <li class="list-group-item">type:-{item.type}</li>
  <li class="list-group-item">price:-{item.price}</li>
  <li class="list-group-item">Owner name:-{item.Name}</li>
  <li class="list-group-item">Owner number:-{item.Num}</li>
<button class="btn btn-primary  mx-2" style={{width:"20%"}} onClick={()=>{handleDelete(item.id)}}>Remove</button>
</ul>
  </div>

</div>
    )}
</div>
    </>
  )
}
