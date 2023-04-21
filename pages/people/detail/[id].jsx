import { getPersonDetails } from "@/lib/people";
import Image from "next/image";
import DefaultPoster from "/public/images/no-poster.png";
import { useState } from "react";
import PeopleMovieCard from "@/components/PeopleMovieCard";

const PersonDetails = ({ person }) => {
  const [loading, setLoading] = useState(true);

  const popular = person.combined_credits.cast.filter(
    ({ vote_average }) => vote_average >= 8
  );

  console.log(popular);

  console.log(person);
  return (
    <div className='w-full flex flex-col md:flex-row px-4  mt-14 md:gap-5'>
      {/* left side */}
      <div className=''>
        <div className=' md:w-80 w-60 justify-start relative rounded-lg'>
          <Image
            src={
              person?.profile_path
                ? process.env.NEXT_PUBLIC_IMAGE_URL + person?.profile_path
                : DefaultPoster
            }
            width={300}
            height={400}
            className='object-cover h-full w-full  rounded-lg'
            alt=''
            onLoad={() => setLoading(false)}
          />
          {loading && (
            <div className='absolute inset-0 flex justify-center items-center'>
              <div className='w-12 h-12 border-4 border-gray-300 rounded-full animate-spin'></div>
            </div>
          )}
        </div>
        <div className='flex flex-col text-white my-3 w-[340px]'>
          <h3 className='md:text-xl text-lg font-medium '>Personal Info</h3>

          <div className=' mt-5'>
            <ul className='space-y-3'>
              <li>
                <span className='font-bold'>
                  Known For
                  <p className='font-light'>{person.known_for_department}</p>
                </span>
              </li>

              <li>
                <span className='font-bold'>
                  Birthday
                  <p className='font-light'>{person.birthday}</p>
                </span>
              </li>

              <li>
                <span className='font-bold'>
                  Birth Place
                  <p className='font-light'>{person.place_of_birth}</p>
                </span>
              </li>

              <li>
                <span className='font-bold'>
                  Gender
                  <p className='font-light'>
                    {person.gender === 1 ? "Female" : "Male"}
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='w-full overflow-hidden flex-col flex '>
        <h2 className='font-bold text-white md:text-2xl xl:text-3xl text-2xl'>
          {person.name}
        </h2>
        <div className='flex flex-col md:mt-5 mt-3'>
          <h3 className='text-white font-medium xl:text-xl text-lg'>
            Biography
          </h3>

          <p className='text-white text-sm font-normal my-3'>
            {person.biography}
          </p>

          <div className='mt-5 w-full'>
            <h2 className='font-bold text-white mb-4 text-lg'>
              Popular Medias
            </h2>
            <div className='flex overflow-x-auto gap-5'>
              {popular.map((media) => (
                <div>
                  <PeopleMovieCard media={media} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const person = await getPersonDetails(id);

  return {
    props: {
      person,
    },
  };
}
