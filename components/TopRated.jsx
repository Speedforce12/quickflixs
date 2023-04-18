import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import Switch from "./Switch";
import topRated from "@/lib/topRated";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import MovieCardSkeleton from "./MovieCardSkeleton";

const TopRated = () => {
  const switchOptions = ["movie", "tv"];
  const [mediaType, setMediaType] = useState("movie");

  const handleSelected = (selected) => {
    setMediaType(selected);
  };

  const { isLoading, data: movie } = useQuery({
    queryKey: ["topRated", mediaType],
    queryFn: () => topRated(mediaType),
    staleTime: 180000,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 5000,
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
        <h3 className='text-white font-medium md:text-2xl  text-md'>
          Top Rated
        </h3>
        <Switch
          handleSelected={handleSelected}
          options={switchOptions}
          title1={"Movie"}
          title2={"Tv Shows"}
        />
      </div>
      <div className='h-full'>
        {isLoading ? (
          <MovieCardSkeleton />
        ) : (
          <Slider {...settings} className='h-full'>
            {movie?.map((movie) => (
              <div className='h-full px-2 snap-x' key={movie?.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default TopRated;
