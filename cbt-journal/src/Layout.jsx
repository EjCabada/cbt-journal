import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'


function Layout(params) {
  
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  
    </>
  )
}

export default Layout