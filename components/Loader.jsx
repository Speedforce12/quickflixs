import React from "react";

const Loader = () => {
  return (
    <div className='relative w-10 h-10'>
      <div className='absolute inset-0 w-full h-full'>
        <div className='w-full h-full animate-spin ease-linear border-4 border-blue-500 rounded-full border-t-0'></div>
      </div>
      <div className='absolute inset-0 w-full h-full'>
        <div className='w-full h-full animate-ping ease-out border-4 border-blue-500 rounded-full'></div>
      </div>
      <div className='absolute inset-0 w-full h-full'>
        <div className='w-full h-full animate-pulse ease-out border-4 border-blue-500 rounded-full'></div>
      </div>
      <div className='absolute inset-0 w-full h-full flex justify-center items-center text-blue-500 font-bold'>
        <svg
          className='w-6 h-6 fill-current'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M4.938 9.17c.007 2.865 2.353 5.2 5.22 5.2 1.384 0 2.63-.54 3.563-1.41l1.414 1.415c-.993 1.002-2.3 1.596-3.777 1.596-3.256 0-5.907-2.65-5.907-5.915 0-1.944.941-3.68 2.396-4.771L4.938 9.17zm8.11-3.17c0 1.732-.7 3.292-1.836 4.428l-1.412-1.413c.79-.79 1.25-1.858 1.25-3.015 0-2.48-2.02-4.5-4.5-4.5-1.48 0-2.87.722-3.71 1.928l1.472 1.128C5.68 5.257 6.77 4.5 8 4.5c1.38 0 2.5 1.12 2.5 2.5 0 .628-.24 1.207-.628 1.63l1.475 1.123c.716-1.325 1.489-2.895 1.489-4.753z'
            fillRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
