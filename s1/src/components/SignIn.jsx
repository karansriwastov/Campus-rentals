import React from 'react'
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom'
export default function SignIn() {
  return (
  <div>
    <h1 className='display-5 fw-bold text-center ' style={{color:"#efce93"}}>Welcome to campus-Rental</h1>
      <div class={`px-3 py-3 ${styles['sign-up-con']} form-signin w-100 m-auto my-5`} style={{maxWidth:"40rem",}}>
    <h2 className='display-5 fw-bold text-center ' style={{color:"#1C1678"}}>Sign In</h2>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control inp" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div>
<label for="inputPassword5" class="form-label text-bold">Password</label>
<input type="password" id="inputPassword5" class="form-control inp" aria-describedby="passwordHelpBlock"/>
</div>
<div>
<Link to="/sign-up" type='button' className='btn btn-primary mx-3 my-2'>SignUp</Link>
<Link to="/sign-in" type='button' className='btn btn-primary mx-3 my-2'>SignIn</Link>
<a style={{float:"right",color:"orangered",cursor:"pointer"}}>forgot password?</a>
</div>
      </div>
      </div>
  )
}
