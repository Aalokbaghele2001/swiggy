import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
        <div className='flex'>
          <div>
    <h1 className='text-5xl font-bold text-orange-500 '  >Swiggy</h1>
    <h3 className='text-md font-bold text-orange-400 py-1'>Explore Food Delight</h3>
    </div>

    <img src="" className='h-14 w-20 my-4  '/>
   
        </div>
        <div>
    <input  className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'
    type="search" name='search' placeholder='Search here' autoComplete='off'/>
        </div>
    </nav>
  )
}

export default Navbar
