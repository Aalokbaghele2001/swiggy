// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='flex flex-col space-x-72 lg:flex-row'>
//       <div className='flex mx-10 my-2'>
//         <div>
//           <h1 className='text-5xl font-bold text-orange-500 '  >Swiggy</h1>
//           <h3 className='text-md font-bold text-orange-400 py-1'>Explore Food Delight</h3>
//         </div>
//         <img src="../src/assets/Swiggy-emblem-removebg-preview.png" className='h-14 w-10 my-4 mx-1  ' />
//         <div className='mx-8'>
//         <i class="fa fa-map-marker fa-lg" aria-hidden="true" ></i>
//         <input className='p-3   text-lg rounded-lg outline-none  bg-transparent  hover:shadow-2xl  w-full lg:w-[15vw] my-5 placeholder:text-gray-900    '
//           type="search" name='search' placeholder='Search for area, street....' autoComplete='off' />

//       </div>
//       </div>
      
//       <div className='flex my-2'>

// <div>
//         <input className='p-3 bg-gray-200 border border-slate-800  text-lg rounded-lg outline-none w-full lg:w-[30vw] my-5 mx-10 hover:shadow-2xl'
//           type="search" name='search' placeholder='Search here' autoComplete='off' />
//       </div>
//       <div>
//         <img src="../src/assets/profile.png" alt="" className='h-15 w-14 my-4 mx-5' />
//       </div>
//       </div>
      
//     </nav>
//   )
// }

// export default Navbar

import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between p-4 bg-[#e9e5f5] shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src="../src/assets/Swiggy-emblem-removebg-preview.png"
          className="h-14 w-12"
          alt="Swiggy Emblem"
        />
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold text-orange-500">Swiggy</h1>
          <h3 className="text-sm lg:text-lg font-bold text-orange-400">Explore Food Delight</h3>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-4 lg:mt-0">
        <div className="flex items-center space-x-2">
          <i className="fa fa-map-marker fa-lg text-orange-500" aria-hidden="true"></i>
          <input
            className="p-2 text-base lg:text-lg rounded-lg outline-none border border-gray-300 w-full lg:w-60 bg-gray-100 placeholder:text-gray-900 focus:border-orange-500 transition-shadow duration-300"
            type="search"
            name="areaSearch"
            placeholder="Search for area, street..."
            autoComplete="off"
          />
        </div>

        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
          <input
            className="p-2 text-base lg:text-lg rounded-lg outline-none border border-gray-300 w-full lg:w-96 bg-gray-100 placeholder:text-gray-900 focus:border-orange-500 hover:shadow-lg transition-shadow duration-300"
            type="search"
            name="foodSearch"
            placeholder="Search here"
            autoComplete="off"
          />
          <img
            src="../src/assets/profile.png"
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

