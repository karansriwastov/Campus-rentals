import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='profile-container'>
     <h2 className='display-5 mx-5 my-5 block'>Profile Settings</h2>
     <div className='container mx-5'>
     <div class="input-group ">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control " value={"Nithin"}/>
  <input type="text" aria-label="Last name" class="form-control" value={"Kumar"}/>
</div>
<label for="exampleFormControlInput1" class="form-label">Date of birth</label>
  <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="date of birth"/>
  <label for="exampleFormControlInput1" class="form-label">collage I'd</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Scholar i'd" value={"2313073"}/>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={"nk0402246@gmail.com"}/>
  <label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" value={"143077"}></input>
</div>
<button type="button" className='btn btn-primary mx-3'>Edit</button>
<Link to="/sign-up" type="button" className='btn btn-primary mx-3'>Log-out</Link>
     </div>
    </div>
  )
}
