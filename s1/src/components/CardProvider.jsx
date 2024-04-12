import { collection,doc, getDocs } from 'firebase/firestore'
import React from 'react'
import { itemsDb } from './Firebase'
export default function CardProvider({item}) {
  console.log(item)
  return(
    <>
    <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">{item.itemName}</h5>
    <ul class="" style={{minWidth:""}}>
  <li class="list-group-item">{item.description}</li>
  <li class="list-group-item">item price:-{item.price}</li>
</ul>
    <a href="#" class="btn btn-primary  mx-2">type</a>
    <a href="#" class="btn btn-primary  mx-2">Add to Cart</a>
  </div>
</div>
    </>
  )
}