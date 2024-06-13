import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
        <div>
    <h3 className='text-xl font-bold text-gray-600' >{new Date().toUTCString()}</h3>
    <h1 className='text-2xl font-bold text-gray-700'>Flavoro Foods</h1>
        </div>
        <div>
    <input  className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'
    type="search" name='search' placeholder='Search here' autoComplete='off'/>
        </div>
    </nav>
  )
}

export default Navbar