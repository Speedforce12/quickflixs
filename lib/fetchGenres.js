import movieDB from "./axios";

export default async function fetchGenres(mediaType) {
  try {
    const res = await movieDB.get(
      `genre/${mediaType}/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );

    const genres = await res.data;
    return genres;
  } catch (error) {
    console.log(error.message);
  }
}
