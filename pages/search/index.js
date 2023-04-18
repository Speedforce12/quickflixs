import MovieCard from "@/components/MovieCard";
import search from "@/lib/search";
import React from "react";

const SearchPage = ({ results, q }) => {

  return (
    <div className='min-h-screen mt-10 max-w-7xl mx-auto flex flex-col'>
      <h1 className='text-white font-medium flex items-center gap-2 text-lg mt-5  justify-center lg:justify-start'>
        Search results for <p className='font-bold text-xl'>"{q}"</p>
      </h1>
      <div className='grid grid-cols-1 px-5 md:grid-cols-3 lg:grid-cols-5 mt-5 gap-5 md:gap-0'>
        {results.map((result) => (
          <div>
            <MovieCard movie={result} key={result.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

export async function getServerSideProps(context) {
  const { q } = context.query;

  const results = await search(q);

  return {
    props: { results, q },
  };
}
