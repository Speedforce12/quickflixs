import React from "react";
import MiniMovieCard from "./MiniMovieCard";

const OtherMedia = ({ media, header }) => {
  return (
    <section className='flex flex-col p-3 max-w-7xl w-full '>
      <h2 className='font-semibold text-white text-xl mb-5'>{header}</h2>
      <div className='overflow-x-auto flex'>
        <div className='flex'>
          {/* other media goes here */}
          {media.length === 0 && (
            <p className='text-red-500 font-extrabold  p-2 rounded-lg border-red-400 border-2'>
              No {header}s  Available
            </p>
          )}
          {media.map((item) => (
            <MiniMovieCard flick={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherMedia;
