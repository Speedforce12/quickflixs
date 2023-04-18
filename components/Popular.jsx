import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Switch from "./Switch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import fetchPopular from "@/lib/popular";

const Popular = () => {
  const switchOptions = ["movie", "tv"];
  const [popular, setPopular] = useState("movie");

  const handleSelected = (selected) => {
    setPopular(selected);
  };

  const { isLoading, data: movie } = useQuery({
    queryKey: ["popular", popular],
    queryFn: () => fetchPopular(popular),
    staleTime: 180000,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed:3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full h-full'>
      <div className='flex items-center justify-between mb-5 mx-8 lg:mx-2'>
        <h3 className='text-white font-medium md:text-2xl  text-md'>Popular</h3>
        <Switch
          handleSelected={handleSelected}
          options={switchOptions}
          title1={"Movies"}
          title2={"Tv Shows"}
        />
      </div>
      <div className='h-full'>
        {isLoading ? (
          <MovieCardSkeleton />
        ) : (
          <Slider {...settings} className='h-full'>
            {movie?.map((movie) => (
              <div className='h-full px-2 snap-x' key={movie}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};
export default Popular;
