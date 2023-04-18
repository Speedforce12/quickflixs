import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlurImage from "./BlurImage";
import DefaultPoster from "../public/images/no-poster.png";
import Rating from "./Rating";
import dayjs from "dayjs";

const MovieCard = ({ movie }) => {
  const [endpoint, setEndpoint] = useState("");

  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    if (movie?.first_air_date) setEndpoint("tv");
    else {
      setEndpoint("movie");
    }
  }, [movie]);

  return (
    <Link
      href={`/${endpoint}/${movie?.id}`}
      className='relative flex flex-col md:w-52 w-full md:h-[375px] rounded-md overflow-hidden shadow-md gap-3'
      key={movie?.id}>
      <div className='relative w-full h-full'>
        <BlurImage
          image={
            movie?.poster_path ? imageUrl + movie?.poster_path : DefaultPoster
          }
          alt={movie?.title}
        />
        <div className='absolute -bottom-5 left-0 p-0.5 h-11 w-11 '>
          <Rating rating={movie?.vote_average.toFixed(1)} />
        </div>
      </div>
      <div className='flex-1 p-2'>
        <h2 className='text-lg font-semibold  text-white truncate'>
          {movie?.original_title || movie?.title || movie?.name}
        </h2>
        <p className='mt-1 text-sm text-gray-400 font-medium'>
          {movie?.release_date
            ? dayjs(movie?.release_date).format("MMM D, YYYY")
            : dayjs(movie?.first_air_date).format("MMM D, YYYY")}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
