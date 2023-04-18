import axios from "axios";

const headers = {
  Authorization: "bearer " + process.env.TOKEN,
};

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers,
});

export default movieDB;
