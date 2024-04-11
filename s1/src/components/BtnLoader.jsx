import React from 'react'

export default function BtnLoader() {
  return (
    <>
    <button to="/sign-up" type='button' className='btn btn-primary mx-3 my-2'>
    <div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div> 
    </button>
     
    </>
  )
}
