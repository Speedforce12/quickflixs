import HeroBanner from "@/components/HeroBanner";
import Popular from "@/components/Popular";
import TopRated from "@/components/TopRated";
import Trending from "@/components/Trending";
import movieDB from "@/lib/axios";
import axios from "axios";
import Head from "next/head";

export default function Home({ upComing }) {
  return (
    <>
      <Head>
        <title>QuickFlicks</title>
        <meta
          name='description'
          content='Best Source for movies and tv shows information'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/logo.png' />
      </Head>
      <main className=''>
        <HeroBanner movie={upComing} />

        <div className='max-w-7xl w-full mx-auto mt-10 flex flex-col gap-5 h-full '>
          <Trending />
          <Popular />
          <TopRated />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const upComingRes = await movieDB.get(
    `movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const upComing = upComingRes.data;

  return {
    props: {
      upComing,
    },
  };
}
