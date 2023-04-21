import Image from "next/image";
import DefaultPoster from "../public/images/no-poster.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

const PeopleMovieCard = ({ media }) => {
    console.log(media)
  return (
    <Link
      href={`/${media.media_type}/${media.id}`}
      className='w-40 rounded-lg  flex flex-col items-center justify-center  overflow-hidden'>
      <Image
        alt={media.title || media.name}
        className='w-full object-cover rounded-lg'
        src={
          media.poster_path
            ? process.env.NEXT_PUBLIC_IMAGE_URL + media.poster_path
            : DefaultPoster
        }
        width={200}
        height={250}
      />
      <div className="text-center mt-2">
        <span className='text-white'>
          {media?.title?.substring(0,30) || media?.name?.substring(0,50)}
        </span>
      </div>
    </Link>
  );
};

export default PeopleMovieCard;
