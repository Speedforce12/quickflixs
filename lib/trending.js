import movieDB from "./axios";

export default async function trending(period) {
  const res = await movieDB.get(
    `/trending/all/${period}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const results = await res.data.results;

  return results;
}
