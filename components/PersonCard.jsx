import Image from "next/image";
import DefaultPoster from "../public/images/no-poster.png";
import Link from "next/link";
import { useState } from "react";

const PersonCard = ({ actor }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Link
      href={`/people/detail/${actor.id}`}
      className='md:w-58 h-72 w-52 border rounded-lg overflow-hidden relative hover:scale-105 duration-200 ease-in-out hover:rotate-3'
      key={actor.id}>
      <div className='h-full'>
        <Image
          src={
            actor?.profile_path
              ? process.env.NEXT_PUBLIC_IMAGE_URL + actor.profile_path
              : DefaultPoster
          }
          width={250}
          height={300}
                  className={`object-cover ${loading ? "backdrop-blur-sm" : "backdrop-blur-0"}` }
                  onLoad={()=>setLoading(false)}
      
        />
    
      </div>
      <div className='absolute bg-black/80 w-full text-center rounded-b-lg p-1 bottom-0'>
        <p className='text-white'>{actor.name}</p>
      </div>
    </Link>
  );
};

export default PersonCard;
