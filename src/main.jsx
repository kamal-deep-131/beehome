import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
const Layout = lazy(() => import('./Layout.jsx'))
import { ForgotPassword, Home, AllProperties, Profile, SignIn, SignUp, ListingHouse } from './pages'
import './index.css'
import { ProtectedRoutes } from './components'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ContextWrapper } from './context/Context.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/all-properties' element={<AllProperties />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/profile' element={<ProtectedRoutes >
        <Profile />
      </ProtectedRoutes>
      } ></Route>
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/create-listing' element={<ProtectedRoutes>
        <ListingHouse />
      </ProtectedRoutes>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ContextWrapper>
      <RouterProvider router={router} />
    </ContextWrapper>
  </React.StrictMode>
)
