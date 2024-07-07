import React from 'react'
import { Navbar, Footer } from './components'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout