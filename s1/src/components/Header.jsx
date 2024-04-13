import React, { useContext } from 'react'
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from 'react-router-dom';
import AuthProvider, { Store } from '../store/AuthProvider';
import { RiLogoutBoxRLine } from "react-icons/ri";
export default function Header() {
  const {cartItemProvider,cartNumProvider}=useContext(Store)
  return (
    <>
     <div class="px-3 py-2 text border-bottom head">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" previewlistener="true">
            <img src='https://ik.imagekit.io/zfdb8zmah/logo.png?updatedAt=1712936241158' style={{height:'3rem',borderRadius:"5rem"}}></img>
          </a>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <Link to="/" class="nav-link page-links">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><FaHome style={{fontSize:"1.5rem"}}/><use xlink:href="#home"></use></svg>
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" class="nav-link page-links">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><AiFillDashboard style={{fontSize:"1.5rem"}}/><use xlink:href="#speedometer2"></use></svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/my-orders" class="nav-link page-links">
              {/* <span class="position-absolute translate-middle badge rounded-pill bg-danger">
    1
  </span> */}
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><TbTruckDelivery  style={{fontSize:"1.5rem"}}/><use xlink:href="#table"></use></svg>
               Log Out
              </Link>
            </li>
            <li>
              <Link to="/my-cart" class="nav-link page-links">
              {/* <span class="position-absolute translate-middle badge rounded-pill bg-danger">
    {cartNumProvider()}
  </span> */}
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><FaShoppingCart style={{fontSize:"1.5rem"}}/><use xlink:href="#grid"></use></svg>
                My Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div> 
    </>
  )
}
