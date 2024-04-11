import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './SignUp.module.css'
import { Link, useNavigate } from 'react-router-dom'
import AuthProvider from '../store/AuthProvider';
import {getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import BtnLoader from './BtnLoader';
export default function SignIn() {
  const email=useRef();
  const password=useRef();
  const auth=getAuth();
  const [fetching,setFetching]=useState("stop");
  const [currentUser,setUser]=useState();
  const [error,setError]=useState("")
  const handleSignIn=async ()=>{
    setFetching("start")
    await signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then(res=>{setFetching("stop")
      navigate("/")
    })
      .catch(err=>{
      setError(err.message)
      console.log(err.message)
      setFetching("stop")
      })
  }
  const navigate=useNavigate()
  const handlePassword=()=>{
    navigate("/reset-password")
  }
  useEffect(()=>{
    const unsucribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    return ()=>{
      unsucribe()
    }
  },[])
  return (
  <>
    <h1 className='display-5 fw-bold text-center ' style={{color:"#efce93"}}>Welcome to campus-Rental</h1>
      <div class={`px-3 py-3 ${styles['sign-up-con']} form-signin w-100 m-auto my-5`} style={{maxWidth:"40rem",}}>
    <h2 className='display-5 fw-bold text-center ' style={{color:"#1C1678"}}>Sign In</h2>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control inp" id="exampleFormControlInput1" placeholder="name@example.com" ref={email}/>
</div>
<div>
<label for="inputPassword5" class="form-label text-bold">Password</label>
<input type="password" id="inputPassword5" class="form-control inp" aria-describedby="passwordHelpBlock" ref={password}/>
</div>
{<p className='errorMsg'>{error}</p>}
<div>
<Link to="/sign-up" type='button' className='btn btn-primary mx-3 my-2'>SignUp</Link>
{fetching==="start"?<BtnLoader/>:<button to="/sign-up" type='button' className='btn btn-primary mx-3 my-2' onClick={()=>handleSignIn()}>SignIn</button>}
<a onClick={()=>handlePassword()} style={{float:"right",color:"orangered",cursor:"pointer"}}>forgot password?</a>
</div>
      </div>
      </>
  )
}
