import React from 'react'
// import logo from '../pics/logo.png'

export default function Header() {
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
          <li>Home</li>
          <li>Offers</li>
          <li>Sign In</li>
          
        </ul>
      </div>
    </header>
    </div>
    </>
  )
}
