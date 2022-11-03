import React from 'react'
import { useLocation } from 'react-router-dom'
// import logo from '../pics/logo.png'

export default function Header() {
  const location = useLocation()
  function pathMatchRoute(route){
    if (route === location.pathname)
    return true
  }


  return (
    <>
    <div className='bg-white border-b shadow-sm sticky top-0 z-50 '>
    <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
      <div>
        <h2>Patahostel</h2>
        {/* <img src={logo} alt='' className='  cursor-pointer' /> */}
      </div>
      <div>
        <ul className='flex space-x-10'>
          <li className={`cursor-pointer py-3 text-sm font-semibold text-black border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-green-600 border-b-white"
              }`} >Home</li>
          <li>Offers</li>
          <li>Sign In</li>
          
        </ul>
      </div>
    </header>
    </div>
    </>
  )
}
