import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'
import './App.css'
import{
createBrowserRouter,
RouterProvider,
} from 'react-router-dom'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Dashboard from './components/Dashboard.jsx'
import Profile from './components/Profile.jsx'
import OrderHistory from './components/OrderHistory.jsx'
import BookedItems from './components/BookedItems.jsx'
import Feedback from './components/Feedback.jsx'
import Thankyou from './components/Thankyou.jsx'
import Orders from './components/Orders.jsx'
import OrderList from './components/OrderList.jsx'
import Cart from './components/Cart.jsx'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import ForgetPassword from './components/ForgetPassword.jsx'
import ProctedRoute from './components/ProctedRoute.jsx'
import Header from './components/Header.jsx'
import AuthProvider from './store/AuthProvider.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:([
      {
        path:'/',
        element:<Home/>,
      }
    ])
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:([
      {
        path:'/dashboard',
        element:<Profile/>
      },
      {
        path:'/dashboard/order-history',
        element:<OrderHistory/>
      },
      {
        path:'/dashboard/booking-history',
        element:<BookedItems/>
      }
    ])
  },
  {
    path:"/feedback",
    element:<App/>,
    children:([
      {
        path:"/feedback",
      element:<Feedback/>
      }
    ])
  },
  {
    path:"/thank-you",
    element:<Thankyou/>
  },
  {
path:"/my-orders",
element:<Orders/>,
children:([
  {
    path:"/my-orders",
    element:<OrderList/>
  }
])
  },
  {
    path:"/my-cart",
    element:<Orders/>,
    children:([
      {
        path:"/my-cart",
        element:<Cart/>
      }
    ])
      },
      {
        path:"/sign-up",
        element:<SignUp/>
      },
      {
        path:"/sign-in",
        element:<SignIn/>
      },
      {
        path:"/reset-password",
        element:<ForgetPassword/>
      },
  {
    path:"*",
    element:<ErrorPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
