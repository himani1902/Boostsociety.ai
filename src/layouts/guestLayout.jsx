import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import { DarkModeProvider } from "../context/DarkModeContext";
//import {Box} from " @mui/material"

const guestLayout = ({children}) => {
  return (
    <div>
{/* <DarkModeProvider/> */}
      <Navbar/>
        <div>
            {children}
        </div>
      <Footer/>
      
      
    </div>
  )
}

export default guestLayout
