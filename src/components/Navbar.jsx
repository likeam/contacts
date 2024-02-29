import React from 'react'
import { FaMobileAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div className='h-[60px] bg-white  rounded-lg items-center text-xl my-4 justify-center gap-2 flex font-medium  '>
        <FaMobileAlt  className='font-bold text-orange'/>
        <h1>MY Cell Contact App</h1>
    </div>
  )
}

export default Navbar