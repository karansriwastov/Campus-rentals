import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'
import { collection, doc, getDocs } from 'firebase/firestore';
import { itemsDb } from './Firebase';
import { useContext } from 'react';
export default function Hero() {
 const handleBuy=async()=>{
    const data = await getDocs(collection(itemsDb, "books"));
data.forEach((doc) => {
  console.log(doc.data());
})
}
  return (
    <>
     <div class="row flex-lg-row-reverse align-items-center g-5 py-5 hero px-2 z-10 ">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://ik.imagekit.io/zfdb8zmah/Designer.png?updatedAt=1712935116491" class="d-block mx-lg-auto img-fluid" alt="campus-rental" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 mx-3" style={{color:"#002046"}}>Campus-Rentals</h1>
        <p class={`lead mx-3 ${styles['hero-text']}`}>"Welcome to Campus-Rentals – Your Ultimate Campus Rental Destination!

At Campus-Rentals, we're dedicated to making your campus life easier and more convenient than ever before. Whether you're a student in need of lab equipment, a budding photographer searching for the perfect camera, or a sports enthusiast looking to gear up for your next game, we've got you covered."</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class={`btn btn-primary btn-lg px-4 me-md-2 mx-3 ${styles['btns']}`} fdprocessedid="o703gj" onClick={()=>handleBuy()}>Buy</button>
         <Link to="/sell-item" type="button" class={`btn btn-primary btn-lg px-4 me-md-2 mx-3 ${styles['btns']}`} fdprocessedid="vkcy8f">Sell</Link>
        </div>
      </div>
    </div> 
    <hr/>
    </>
  )
}
