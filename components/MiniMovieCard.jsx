import DefaultPoster from "../public/images/no-poster.png";
import Link from "next/link";
import Rating from "./Rating";
import { useRouter } from "next/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MiniMovieCard = ({ flick }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const router = useRouter();
  const { media } = router.query;

  return (
    <div className='w-80 h-72 p-2 rounded-lg'>
      <Link
        href={`/${media}/${flick.id}`}
        className='flex flex-col  rounded-lg shadow-md overflow-hidden'>
        <LazyLoadImage
          alt={flick.title || flick.name}
          effect='blur'
          className='w-80 h-52  rounded-t-lg'
          src={flick.poster_path ? imageUrl + flick.poster_path : DefaultPoster}
        />

        <div className='flex items-center rounded-b-lg overflow-hidden px-3 py-2.5 bg-white justify-between'>
          <span className='font-semibold text-black text-sm truncate w-52'>
            {flick.title || flick.name}
          </span>

          <div className='h-7 w-7 font-bold'>
            <Rating rating={flick.vote_average.toFixed(1)} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MiniMovieCard;
