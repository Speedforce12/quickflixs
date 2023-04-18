import movieDB from "./axios";

export default async function getDetails(media, id) {
  try {
    const response = await movieDB.get(
      `${media}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos,credits,similar,recommendations`
    );
    const mediaDetails = await response.data;
    return mediaDetails;
  } catch (error) {
    console.log(error);
  }
}
