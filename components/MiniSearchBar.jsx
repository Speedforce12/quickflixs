import { useRouter } from "next/router";
import React, { useState } from "react";

const MiniSearchBar = ({setShowMiniNav}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
      e.preventDefault();
       const encodedSearchTerm = encodeURIComponent(query);
      router.push(`/search?q=${encodedSearchTerm}`);
      setQuery("")
      setShowMiniNav(false)

  };

  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <input
        type='text'
        className='border-0 lg:w-80 w-[340px] h-8 rounded-lg px-3 outline-none text-gray-700'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search Our Large Database'
      />
    </form>
  );
};

export default MiniSearchBar;
