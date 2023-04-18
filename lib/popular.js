import movieDB from "./axios";

export default async function fetchPopular(showType) {
  const res = await movieDB.get(
    `/${showType}/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const results = await res.data.results;

  return results;
}
