import Image from "next/image";
import React from "react";
import Avatar from "../public/images/avatar.png";

const CastSection = ({ crew }) => {
  return (
    <div className='flex flex-col p-3 h-96 max-w-7xl w-full'>
      <h1 className='text-white font-semibold text-xl mb-5'>Main Cast</h1>

      <div className='flex overflow-x-auto'>
        <div className='flex transform transition-all ease-in-out duration-500 gap-5'>
          {crew.map((cast, index) => (
            <div
              className='w-40 h-64 overflow-hidden bg-white shadow-lg rounded-lg'
              key={index}>
              <div className='flex items-center justify-center flex-col overflow-hidden'>
                <Image
                  src={
                    cast.profile_path
                      ? `${
                          process.env.NEXT_PUBLIC_IMAGE_URL + cast.profile_path
                        }`
                      : Avatar
                  }
                  width={100}
                  height={100}
                  alt=''
                  className='object-cover h-48 w-48 rounded-t-lg'
                />

                <div className='flex flex-col  pb-10  mt-1 h-20 px-2'>
                  <p className='text-black font-bold text-sm'>{cast.name}</p>
                  <p className='text-black font-medium text-xs'>
                    {cast.character}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CastSection;
