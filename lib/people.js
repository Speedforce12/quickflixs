import movieDB from "./axios";

export async function getPopularPeople() {
  const res = await movieDB.get(
    `person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const people = res.data.results;

  return people;
}

export async function getPersonDetails(id) {
  try {
    const res = await movieDB.get(
      `person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=combined_credits`
    );
    const person = await res.data;
    return person;
  } catch (error) {
    console.log(error);
  }
}
