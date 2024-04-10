import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='container mx-7 my-5'>
      <div class="p-5 text-center  rounded-3">
    <h1 class="text-body-emphasis">Error-404</h1>
    <img src="\src\assets\error.png" class="img-fluid" alt="error-logo" height={"300"}></img>
    <p class="col-lg-8 mx-auto fs-5 text-muted">
      Page is not found
    </p>
    <div class="d-inline-flex gap-2 mb-5">
    <Link to='/'>
    <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
        Go back Home
        <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg>
      </button>
    </Link>
    </div>
  </div>
    </div>
  )
}
