import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import styles from './SignUp.module.css'
import {useNavigate} from 'react-router-dom'
export default function ForgetPassword() {
    const auth=getAuth();
    const email=useRef();
    const navigate=useNavigate();
  const [error,setError]=useState("")
    const handleSendLink=()=>{
        sendPasswordResetEmail(auth,email.current.value)
        .then(()=>{
            alert("check your mail to reset password")
            navigate("/sign-in")
    })
        .catch(err=>{
            setError(err.message)
            })
    }
  return (
      <>
      <div class={`px-3 py-3 ${styles['sign-up-con']} form-signin w-100 m-auto my-5`} style={{maxWidth:"40rem",}}>
    <h2 className='display-5 fw-bold text-center ' style={{color:"#1C1678"}}>Reset password</h2>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control inp" id="exampleFormControlInput1" placeholder="name@example.com" ref={email}/>
</div>
<div>
<button type='button' className='btn btn-primary mx-3 my-2' onClick={()=>handleSendLink()}>send Link</button>
      </div>
      </div>
    </>
  )
}
