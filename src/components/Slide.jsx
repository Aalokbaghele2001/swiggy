// import React from 'react'

// const Slide = () => {
//   return (
//     <div className='bg-[#d5c9f9] flex  h-72'>
//         <div className='h-1/2'>
//         <h1 className='text-5xl font-bold text-gray-700'>Order food online with Swiggy</h1>
//         </div>
//         <div className='h-1/2'>
//         <img  className ='h-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png" alt="" />
//         </div>
//       </div>
//   )
// }

// export default Slide
import React from 'react';

const Slide = () => {
  return (
    <div className="bg-[#ddd7f2] flex flex-col lg:flex-row items-center justify-center h-72 lg:h-96 p-4 lg:p-10">
      <div className="flex-1 flex flex-col justify-center text-center lg:text-left mb-4 lg:mb-0">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-700 leading-tight">
          Order food online with Swiggy
        </h1>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          className="h-full w-auto max-h-40 lg:max-h-72 object-contain"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
          alt="Swiggy"
        />
      </div>
    </div>
  );
};

export default Slide;

