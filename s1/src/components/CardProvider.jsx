import React from 'react'

export default function CardProvider({heading,type}) {
  return(
    <>
    <h3 className={`display-5 mx-3 my-3 sub-head`}>{heading}</h3>
    <a href="#" class={`btn btn-warning view-btn`}>view all</a>
     <div className={`container my-3 category`}>
    <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">item name</h5>
    <ul class="" style={{minWidth:""}}>
  <li class="list-group-item">item type:-Rent/booking</li>
  <li class="list-group-item">item price:-300rs</li>
  <li class="list-group-item">Owner name:-rahul</li>
  <li class="list-group-item">Owner number:-9087837763</li>
</ul>
    <a href="#" class="btn btn-primary  mx-2">{type}</a>
    <a href="#" class="btn btn-primary  mx-2">Add to Cart</a>
  </div>
</div>
<div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">item name</h5>
    <ul class="" style={{minWidth:""}}>
  <li class="list-group-item">item type:-Rent/booking</li>
  <li class="list-group-item">item price:-300rs</li>
  <li class="list-group-item">Owner name:-rahul</li>
  <li class="list-group-item">Owner number:-9087837763</li>
</ul>
    <a href="#" class="btn btn-primary  mx-2">{type}</a>
    <a href="#" class="btn btn-primary  mx-2">Add to Cart</a>
  </div>
</div>
<div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">item name</h5>
    <ul class="" style={{minWidth:""}}>
  <li class="list-group-item">item type:-Rent/booking</li>
  <li class="list-group-item">item price:-300rs</li>
  <li class="list-group-item">Owner name:-rahul</li>
  <li class="list-group-item">Owner number:-9087837763</li>
</ul>
    <a href="#" class="btn btn-primary  mx-2">{type}</a>
    <a href="#" class="btn btn-primary  mx-2">Add to Cart</a>
  </div>
</div>
    </div> 
    <hr/>
    </>
  )
}