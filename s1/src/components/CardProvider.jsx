import { collection,doc, getDocs } from 'firebase/firestore'
import React, { useContext } from 'react'
import { itemsDb } from './Firebase'
import AuthProvider, { Store } from '../store/AuthProvider'
export default function CardProvider({item}) {
  const {cartItemProvider,AddItemsToCart}=useContext(Store)
  return(
    <>
    <div class="card my-3" style={{width: "18rem"}}>
  <div class="card-body">
   <img width="150" height="150" src={item.img} class="card-img-top" alt="..."/>
    <h5 class="card-title text-center">{item.itemName}</h5>
    <ul class="" style={{minWidth:""}}>
  <li class="list-group-item">{item.description}</li>
  <li class="list-group-item">price:-rs.{item.price}</li>
  <li class="list-group-item">type:-{item.type}</li>
  <li class="list-group-item">Owner Name:-{item.Name}</li>
  <li class="list-group-item">Owner Number:-{item.Num}</li>
</ul>
<div>
    <button class="btn btn-primary  mx-2 my-2 center" style={{width:"100%"}} onClick={()=>{
    cartItemProvider(item)
    AddItemsToCart(item)
    }}>Add to Cart</button>
    </div>
</div>
  </div>
    </>
  )
}