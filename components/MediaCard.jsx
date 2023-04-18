import Image from "next/image";
import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import PopUp from "./PopUp";

const MediaCard = ({ videos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const videosLinks = videos.filter(
    (v) => v.official === true || v.type === "Trailer"
  );
  return (
    <>
      <div className='max-w-7xl flex flex-col p-3 w-full'>
        <h2 className='font-semibold text-white text-xl mb-5'>
          Trailers & Videos
        </h2>
        <div className='flex overflow-x-auto h-72'>
          <div className='flex gap-5'>
            {videosLinks.map((video) => (
              <div
                className='w-96 h-52 relative group rounded-xl'
                key={video.id}
                onClick={() => {
                  setIsOpen(true);
                  setVideoId(video.key);
                }}>
                <div className='opacity-0 group-hover:opacity-100 group-hover:top-2 transition duration-300 inset-x-0 -bottom-2 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t'>
                  <div className='transform-gpu  group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 w-full h-full pb-10 flex items-center justify-center transition duration-300 ease-in-out'>
                    <CiPlay1 size={80} className='text-red-500' />
                  </div>
                </div>
                <Image
                  src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg `}
                  width={500}
                  height={300}
                  className='h-full w-full object-cover rounded-xl mb-5'
                />
                <span className="text-white font-semibold ">{ video.name.substring(0,36)}...</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />
    </>
  );
};

export default MediaCard;
