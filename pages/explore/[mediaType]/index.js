import MovieCard from "@/components/MovieCard";
import movieDB from "@/lib/axios";
import { colorStyles } from "@/lib/customize";
import fetchGenres from "@/lib/fetchGenres";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import HashLoader from "react-spinners/HashLoader";

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

let filters = { sort_by: "popularity.desc" };

const MoviePage = ({ genresData }) => {
  const router = useRouter();
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState("popularity.desc");
  const mediaType = router.query.mediaType;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchGenreMovies = async () => {
    setLoading(true);
    const res = await movieDB.get(
      `/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=${filters.sort_by}&include_adult=true&with_genres=${filters.with_genres}`
    );
    const info = await res.data;
    setData(info);
    setLoading(false);
  };

  useEffect(() => {
    fetchGenreMovies();
    setPageNumber(1);
  }, [mediaType, genre, sortby]);

  const fetchMoviesPerPage = async () => {
    const res = await movieDB.get(
      `/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=${filters.sort_by}&include_adult=true&with_genres=${filters.with_genres}&page=${pageNumber}`
    );
    const info = await res.data;
    setData({
      ...data,
      results: [...data?.results, ...info.results],
    });
    setPageNumber((prev) => prev + 1);
  };

  const handleChange = (selectOption, action) => {
    if (action.name === "sortby") {
      setSortby(selectOption);
      if (action.action !== "clear") {
        filters.sort_by = selectOption.value;
      } else {
        delete filters.sort_by;
        filters.sort_by = "popularity.desc";
      }
    }

    if (action.name === "genres") {
      setGenre(selectOption);
      if (action.action !== "clear") {
        let genreId = selectOption.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }
    setPageNumber(1);
    fetchGenreMovies();
  };

  return (
    <div className='mt-10 max-w-7xl mx-auto min-h-screen'>
      <div className='flex flex-col p-2'>
        <div className='flex items-center justify-between flex-col md:flex-row gap-5'>
          <h2 className='text-white font-semibold text-2xl tracking-tight flex gap-3'>
            Explore <p className='first-letter:uppercase'>{mediaType}s</p>
          </h2>
          <div className='flex flex-col md:flex-row  gap-3'>
            <Select
              styles={colorStyles}
              className='max-w-lg w-full min-w-[250px]'
              isMulti
              value={genre}
              name='genres'
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={handleChange}
              options={genresData?.genres}
              placeholder='Select Genres'
              closeMenuOnSelect={false}
            />

            <div>
              <Select
                name='sortby'
                value={sortby}
                styles={colorStyles}
                placeholder='Sort By'
                options={sortbyData}
                onChange={handleChange}
                className='max-w-[500px] w-full min-w-[250px]'
                isClearable
              />
            </div>
          </div>
        </div>
        {loading ? (
          <div className='flex items-center justify-center h-screen'>
            <HashLoader size={80} color='#36d7b7' />
          </div>
        ) : (
          <>
            <InfiniteScroll
              next={fetchMoviesPerPage}
              dataLength={data?.results?.length || []}
              hasMore={pageNumber <= data?.total_pages}
              loader={
                <div className='w-screen flex items-center justify-center h-screen mx-auto'>
                  <HashLoader size={80} color='#36d7b7' />
                </div>
              }>
              {data?.results?.length > 0 ? (
                <div className='mt-10 px-3 grid grid-cols-1 mx-auto plac md:grid-cols-4 xl:grid-cols-5 gap-10'>
                  {data?.results?.map((media) => (
                    <div className='mx-5'>
                      <MovieCard movie={media} key={media.id} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className='flex items-center justify-center h-screen'>
                  <p className='text-white text-3xl font-bold w-full text-center'>
                    No Result Matching Your Query
                  </p>
                </div>
              )}
            </InfiniteScroll>
          </>
        )}
      </div>
    </div>
  );
};

export default MoviePage;

export async function getServerSideProps(context) {
  const { mediaType } = context.query;

  const genresData = await fetchGenres(mediaType);

  return {
    props: {
      genresData,
    },
  };
}
