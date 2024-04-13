import React, { useRef, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { app, img, itemsDb } from './Firebase';
import {Navigate, useNavigate} from 'react-router-dom'
import BtnLoader from './BtnLoader';
import { uploadBytes ,ref, getDownloadURL} from 'firebase/storage';
import {v4} from "uuid"
export default function SellItem() {
  let imgurl="";
  const [startLoad,stopLoad]=useState("stop")
  const [err,setErr]=useState(false)
  const [image,setImage]=useState()
    const itemName=useRef();
    const category=useRef();
    const price=useRef();
    const description=useRef();
    const ownerMobile=useRef();
    const ownerName=useRef()
    const sellImage=useRef();
    const navigate=useNavigate()
    const type=useRef()
    const handleUploadImg=(e)=>{
      console.log(e.target.files[0])
    const storageRef=ref(img,`image${v4()}`)
    uploadBytes(storageRef,e.target.files[0]).then(data=>{
      console.log(data,"storageRef")
      getDownloadURL(data.ref).then(val=>{imgurl=val})
    })
    e.target.files=[]
    }
    const handleSellItem=async()=>{
      if(itemName.current.value==='' || price.current.value==='' || description.current.value==='',ownerMobile.current.value===''|| ownerName.current.value===''){
          setErr(true)
      }
      else{
      stopLoad("start")
           const dbId=await addDoc(collection(itemsDb,type.current.value),{
            itemName:itemName.current.value,
            price:price.current.value,
            description:description.current.value,
            type:type.current.value,
            Name:ownerName.current.value,
            Num:ownerMobile.current.value,
            img:imgurl,
           })
           stopLoad("stop")
           itemName.current.value=""
           price.current.value=""
           description.current.value=""
           type.current.value=""
           ownerName.current.value=""
           ownerMobile.current.value=""
           navigate("/")
          }
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
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fw-medium">Your name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="please enter item name" ref={ownerName}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fw-medium">your mobile number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="please enter item name" ref={ownerMobile}/>
</div>
<div class="form-label mb-3">
  <label class=" fw-semibold" for="inputGroupSelect01">type</label>
  <select class="form-select inp" id="inputGroupSelect01" ref={type}>
    <option value="rent">rent</option>
    <option value="Buy">sell</option>
  </select>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fw-medium">price</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="please enter price in ₹" ref={price}/>
</div>
<div class=" mb-3">
<label for="exampleFormControlInput1" class="form-label fw-medium">upload image(if any)</label>
  <input type="file" class="form-control" id="inputGroupFile01 " onChange={(e)=>handleUploadImg(e)}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label fw-medium">Description</label>
  <textarea type="text" class="form-control row-5" id="exampleFormControlInput1" placeholder="please enter description for item" ref={description}/>
</div>
{startLoad==="start" && <div class="alert alert-danger sticky-top" role="alert">
  you will be re-direct to home-page
</div>}
{err && <p style={{color:"red"}}>Fill all manditory fields</p>}
      {startLoad==="start"?<BtnLoader type={"btn-warning"}/>:<button type='button' className='btn btn-warning' onClick={()=>{
        handleSellItem()
      }
      }>Sell item</button>}
      </div>
      </div>
      <Footer/>

    </>
  )
}
