import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
      <li class="nav-item"><Link to="#" class="nav-link px-2 text-body-secondary">Contact-Us</Link></li>
      <li class="nav-item"><Link to="/feedback" class="nav-link px-2 text-body-secondary">FeedBack</Link></li>
      <li class="nav-item"><Link to="#" class="nav-link px-2 text-body-secondary">About</Link></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
</div>
    </>
  )
}
