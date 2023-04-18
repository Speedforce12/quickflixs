import React from "react";

const MovieCardSkeleton = () => {
  return (
    <div className='relative flex flex-col w-52 h-[375px] rounded-md overflow-hidden shadow-md gap-3 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]'>
      <div className='h-[375px] bg-neutral-600 shadow w-72 '></div>
      <div className='flex-1 p-2 space-y-2'>
        <div className='h-6 bg-neutral-600 shadow w-40 rounded-full'></div>
        <div className='h-5 bg-neutral-600 shadow w-24 rounded-full'></div>
        {/* <div className='h-4 bg-neutral-600 shadow w-20 rounded-full'></div> */}
        {/* <div className='mt-2 flex flex-wrap gap-1 text-xs'>
          <div className='h-6 bg-neutral-600 shadow w-12 rounded-full'></div>
          <div className='h-6 bg-neutral-600 shadow w-16 rounded-full'></div>
        </div> */}
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
