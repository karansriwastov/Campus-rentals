import React from 'react'

export default function BtnLoader({type}) {
  return (
    <>
    <button to="/sign-up" type='button' className={`btn ${type} mx-3 my-2`}>
    <div class={`spinner-border text-light`} role="status">
  <span class="visually-hidden">Loading...</span>
</div> 
    </button>
     
    </>
  )
}
