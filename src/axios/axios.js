import axios from "axios";

// Creating instance with base URL to make requests to the movie db

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
