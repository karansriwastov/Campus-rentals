import React from 'react'

export default function Sidebar() {
  return (
    <>
     <div class="d-flex flex-column flex-shrink-0 p-3" style={{width: '280px',minHeight:'30rem',backgroundColor:'#1C1678'}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" previewlistener="true">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Dashboard</span>
    </a>
    <hr style={{color:'whitesmoke'}}/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          profile Settings
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Order history
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          booking history
        </a>
      </li>
    </ul>
    </div>
    </>
  )
}
