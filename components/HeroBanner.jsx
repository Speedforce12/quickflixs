import Image from "next/image";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const HeroBanner = ({ movie }) => {
  const [background, setBackground] = useState(null);
  const url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const bg =
      url + movie?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, []);

  return (
    <div className='h-[80vh] relative'>
      {background && (
        <>
          <Image
            className='object-cover top-0 left-0 w-full h-full'
            src={background}
            alt=''
            fill
            priority
          />
        </>
      )}
      <div className='bg-black/30 absolute top-0 left-0 w-full h-full' />
      <div className='w-full h-full flex items-center justify-center absolute top-0'>
        <div className='text-center px-3'>
          <h1 className='font-bold lg:text-7xl text-5xl text-white'>Welcome</h1>
          <p className='text-white font-medium text-lg lg:text-2xl mb-7'>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className='mt-5 w-full px-5'>
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
