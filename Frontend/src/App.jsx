import React, { useState,useEffect  } from 'react'
import './App.css'
import initializeLogout from '../initializeLogout'
import {Sidebar,Extra} from './pages/Pindex'
import {Outlet} from "react-router-dom"

function App() {
//   useEffect(() => {
//     initializeLogout();
// }, []);

  return (
   
   <div className=' bg-black h-screen w-screen'>
    <Sidebar/>
    <Outlet/>
    <Extra/>
    </div>
  )
}

export default App