import axios from "axios";

export default async function search(query) {
  try {
    const res = await axios(`http://localhost:3000/api/search?q=${query}`);

    const results = await res.data.results;
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
}
