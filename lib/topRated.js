import movieDB from "./axios";

export default async function topRated(media) {
  const res = await movieDB.get(
    `/${media}/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const results = await res.data.results;

  return results;
}
