import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import React from 'react'

const Layout = () => {
  return (
    <div style={{overflowX:"hidden"}} >
      
        <Navbar/>
        <Sidebar/>
        <Home/>
    </div>
  )
}

export default Layout