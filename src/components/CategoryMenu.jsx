// import React from 'react'

// const CategoryMenu = () => {
//   return (
//     <div className='ml-6'>
//         <h3 className='text-xl font-semibold'>Find the best Food</h3>
//         <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
//             <button className='px-2 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>ALL</button>
//             <button className='px-2 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
//             <button className='px-2 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Breakfast</button>
//             <button className='px-2 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button>
//             <button className='px-2 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Snacks</button>
//         </div>
//     </div>
//   )
// }

// export default CategoryMenu

import React from 'react';

const CategoryMenu = () => {
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold mb-4">What's on your mind?</h3>
      <div className="my-5 flex gap-3 overflow-x-auto scroll-smooth lg:overflow-x-hidden pb-2">
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
          ALL
        </button>
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
          Lunch
        </button>
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
          Breakfast
        </button>
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
          Dinner
        </button>
        <button className="px-4 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
