import React from 'react'
import logo from './Vector.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='sticky z-10 backdrop-blur-lg rounded-full shadow top-0 w-[95vw]  flex justify-between items-center px-14 py-6 mx-16'>
        <img className='cursor-pointer' src={logo} alt="Company Logo" />
        <div className='flex space-x-3 md:space-x-7'>
            <Link to='/register'><button className='text-black transition-all duration-150 ease-in hover:bg-[#eaeaeaba] rounded-full p-5 shadow w-28 text-xs md:text-base md:w-44 hover:'>Get Projects</button></Link>
            <button className='text-white bg-[#1C1C1C] hover:bg-[#4E4E4E] transition-all duration-150 ease-in rounded-full p-5 shadow w-32 text-xs md:text-base md:w-44'>Onboard Talent</button>
        </div>
    </div>
  )
}

export default Navbar