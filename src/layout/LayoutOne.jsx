import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router'
import { ResNavbar } from '../components/ResNavbar'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <ResNavbar/>
    <Outlet/>
    </>
  )
}

export default LayoutOne