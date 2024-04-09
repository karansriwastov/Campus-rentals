import React from 'react'

export default function CardProvider({heading}) {
  return(
    <>
    <h3 className={`display-5 mx-3 my-3 sub-head`}>{heading}</h3>
    <a href="#" class={`btn btn-warning view-btn`}>view all</a>
     <div className={`container my-3 category`}>
    <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">See more</a>
  </div>
</div>
<div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">See more</a>
  </div>
</div>
<div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">See more</a>
  </div>
</div>
    </div> 
    <hr/>
    </>
  )
}