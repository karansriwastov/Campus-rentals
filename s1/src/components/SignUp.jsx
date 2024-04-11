import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './SignUp.module.css'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import BtnLoader from './BtnLoader';
export default function SignUp() {
  const email=useRef();
  const password=useRef();
  const firstName=useRef();
  const lastName=useRef();
  const confirmPassword=useRef();
  const category=useRef();
  const auth=getAuth();
  const [fetching,setFetching]=useState("stop");
  const [error,setError]=useState("")
  const navigate=useNavigate()
    const handleSignUp=async ()=>{
      setError("")
      setFetching("start")
      try{
      await createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then(()=>setFetching("stop"))
      navigate("/sign-in")
      }catch(err){
        setError(err.message)
        setFetching("stop")
      }
    }  
  return (
  <>
    <h1 className='display-5 fw-bold text-center ' style={{color:"#efce93"}}>Welcome to campus-Rental</h1>
      <div class={`px-5 py-5 ${styles['sign-up-con']} form-signin w-100 m-auto my-3`} style={{maxWidth:"40rem",}}>
          <h2 className='display-5 fw-bold text-center ' style={{color:"#1C1678"}}>Sign Up</h2>
  <div class="mb-3 input-group">
  <span class="input-group-text inp">First and last name</span>
  <input type="text" aria-label="First name" class="form-control inp" ref={firstName}/>
  <input type="text" aria-label="Last name" class="form-control inp" ref={lastName}/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control inp" id="exampleFormControlInput1" placeholder="name@example.com" ref={email}/>
</div>
<div>
<label for="inputPassword5" class="form-label text-bold">Password</label>
<input type="password" id="inputPassword5" class="form-control inp" aria-describedby="passwordHelpBlock" ref={password}/>
</div>
<div>
<label for="inputPassword5" class="form-label text-bold">Confirm Password</label>
<input type="password" id="inputPassword5 inp" class="form-control inp" aria-describedby="passwordHelpBlock" ref={confirmPassword}/>
</div>
<div class="input-group mb-3 mt-3 inp">
  <label class="input-group-text inp" for="inputGroupSelect01">Category</label>
  <select class="form-select inp" id="inputGroupSelect01" ref={category}>
    <option value="faculty">Faculty</option>
    <option value="student">Student</option>
  </select>
</div>
{<p className='errorMsg'>{error}</p>}
<div>
{fetching==="start"?<BtnLoader/>:<button to="/sign-up" type='button' className='btn btn-primary mx-3 my-2' onClick={()=>handleSignUp()}>SignUp</button>}
<Link to="/sign-in" type='button' className='btn btn-primary mx-3 my-2'>SignIn</Link>
</div>
      </div>
      </>
  )
}
