import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter()
    
    const handleSearch = (e) => {
      e.preventDefault();
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      router.push(`/search?q=${encodedSearchTerm}`)
    }

  return (
    <div className='flex w-full'>
      <form className=' h-10 w-full flex items-center' onSubmit={handleSearch}>
        <input
          type='text'
          className='w-full h-full text-gray-700 font-medium text-lg  rounded-tl-full  rounded-bl-full py-7 indent-5 placeholder:font-medium focus:outline-none placeholder:text-lg placeholder:text-gray-500'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search for a movie or tv show...'
        />
        <button className=' rounded-tr-full  rounded-br-full flex items-center justify-center px-5  h-10 bg-gradient-to-r from-orange-500  to-red-500  py-7 text-white font-semibold' type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
