import Rating from "@/components/Rating";
import getDetails from "@/lib/getDetails";
import Image from "next/image";
import DefaultPoster from "../../public/images/no-poster.png";
import dayjs from "dayjs";
import CastSection from "@/components/CastSection";
import MediaCard from "@/components/MediaCard";
import OtherMedia from "@/components/OtherMedia";
import { useState } from "react";
import Head from "next/head";

const DetailPage = ({ stream }) => {


  const [isLoading, setLoading] = useState(true);

  // const imageUrl = "https://image.tmdb.org/t/p/original";

  // filter out the directors
  const director = stream.credits.crew.filter(({ job }) => job === "Director");

  // filter out the writers
  const writer = stream.credits.crew.filter(
    ({ job }) => job === "Screenplay" || job === "Story" || job === "Writer"
  );

  // convert runtime to hours and minutes
  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  }

  return (
    <>
      <Head>
        <title>{stream.title || stream.name}</title>
        <meta name='description' content={stream.overview} />
        <link rel='icon' href='/images/logo.png' />
      </Head>

      <div className='max-w-7xl w-full mx-auto mt-14 px-5'>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className=' md:w-80 w-full relative'>
            <Image
              src={
                stream?.poster_path
                  ? process.env.NEXT_PUBLIC_IMAGE_URL + stream?.poster_path
                  : DefaultPoster
              }
              width={300}
              height={400}
              className='object-cover h-full w-full  rounded-lg'
              alt=''
              onLoad={() => setLoading(false)}
            />
            {isLoading && (
              <div className='absolute inset-0 flex justify-center items-center'>
                <div className='w-12 h-12 border-4 border-gray-300 rounded-full animate-spin'></div>
              </div>
            )}
          </div>
          <div className=''>
            <h1 className='text-white font-semibold text-3xl'>
              {stream.title || stream.name}
            </h1>
            <h3 className='text-neutral-500 font-medium italic text-lg my-2'>
              {stream.tagline}
            </h3>
            <div className='flex items-center gap-3 mb-7'>
              {stream.genres.map((genre) => (
                <span
                  className='text-sm text-white bg-rose-500 px-1  rounded-lg'
                  key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </div>

            <div>
              <div className='h-20 w-20 font-bold text-2xl'>
                <Rating rating={stream.vote_average.toFixed(1)} />
              </div>
            </div>

            <div className='mt-5 max-w-3xl'>
              <p className='text-white'>{stream.overview}</p>
            </div>
            <div className='flex flex-col divide-y-[1px] mt-6  gap-2 divide-neutral-500'>
              <div className='flex items-center gap-5'>
                <span className='flex md:flex-row flex-col md:items-center items-start text-white font-semibold gap-2'>
                  Status:
                  <p className='text-neutral-400 font-medium'>
                    {stream.status}
                  </p>{" "}
                </span>
                <span className='flex md:items-center items-start md:flex-row flex-col text-white font-semibold gap-2'>
                  Release Date:
                  <p className='text-neutral-400 font-medium'>
                    {" "}
                    {stream.release_date
                      ? dayjs(stream.release_date).format("MMM D, YYYY")
                      : dayjs(stream.first_air_date).format("MMM D, YYYY")}
                  </p>{" "}
                </span>

                {stream.release_date && (
                  <span className='flex md:items-center md:flex-row flex-col items-start text-white font-semibold gap-2'>
                    Runtime:
                    <p className='text-neutral-500'>
                      {toHoursAndMinutes(stream.runtime)}
                    </p>
                  </span>
                )}
              </div>

              {stream.release_date ? (
                <>
                  <div className='flex items-center flex-wrap gap-2 max-w-2xl pt-3'>
                    <span className='flex items-center text-white font-semibold'>
                      Director :
                    </span>

                    {director?.map((d) => (
                      <p className='text-neutral-400 font-medium' key={d.id}>
                        {d.name}
                      </p>
                    ))}
                  </div>
                  <div className='flex items-center flex-wrap  max-w-2xl pt-2'>
                    <span className='flex items-center text-white font-semibold pr-2'>
                      Writer :
                    </span>
                    {writer?.map((d, i) => (
                      <p className='text-neutral-400 font-medium' key={i}>
                        {d.name} {writer.length - 1 !== i && ", "}
                      </p>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className='flex items-center flex-wrap  max-w-2xl pt-2'>
                    <span className='flex items-center text-white font-semibold pr-2'>
                      Creator :
                    </span>
                    {stream?.created_by?.map((d, i) => (
                      <p className='text-neutral-400 font-medium' key={i}>
                        {d.name} {stream?.created_by?.length - 1 !== i && ", "}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <CastSection crew={stream.credits.cast} />
          <MediaCard videos={stream.videos.results} />
          <OtherMedia
            media={stream.recommendations.results}
            header='Recommendation'
          />
          <OtherMedia media={stream.similar.results} header='Similar' />
        </div>
      </div>
    </>
  );
};

export default DetailPage;

export async function getServerSideProps(context) {
  const { media, id } = context.query;
  const stream = await getDetails(media, id);

  return {
    props: {
      stream,
    },
  };
}
