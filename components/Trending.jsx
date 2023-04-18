import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Switch from "./Switch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import trending from "@/lib/trending";
import MovieCardSkeleton from "./MovieCardSkeleton";

const Trending = () => {
  const switchOptions = ["day", "week"];
  const [period, setPeriod] = useState("day");
  const handleSelected = (selected) => {
    setPeriod(selected);
  };

  const { isLoading, data: movie } = useQuery({
    queryKey: ["trending", period],
    queryFn: () => trending(period),
    staleTime: 180000,
  });

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
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
        <h3 className='text-white font-medium text-2xl'>Trending</h3>
        <Switch
          handleSelected={handleSelected}
          options={switchOptions}
          title1={"Day"}
          title2={"Week"}
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

export default Trending;
