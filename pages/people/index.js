import PersonCard from "@/components/PersonCard";
import { getPopularPeople } from "@/lib/people";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { HashLoader } from "react-spinners";

const PeoplePage = () => {
  const { isLoading, data: person } = useQuery({
    queryKey: ["people"],
    queryFn: getPopularPeople,
    staleTime: 1800000,
  });

  console.log(person);

  return (
    <div className='mt-10 min-h-screen w-full mx-auto px-10 flex flex-col'>
      <h2 className='text-2xl text-white font-semibold'>Popular Peoples</h2>

      {isLoading && (
        <div className='items-center justify-center w-screen h-screen'>
          <HashLoader size={80} color='#36d7b7' />
        </div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mt-5 gap-5 mx-auto'>
        {person?.map((actor) => (
          <PersonCard actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;
