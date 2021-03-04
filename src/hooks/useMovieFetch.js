import { useState, useEffect } from "react";
import { instance } from "../axios/axios";
import { fetch } from "../axios/requests";

// This custom hook gets info from tmdb api and provides the data to the user

const useMovieFetch = () => {
  const [data, setData] = useState([]);

  const fetchMovies = async () => {
    const request = await instance
      .get(fetch.fetchTrends)
      .catch((err) => console.log(err));
    setData(request.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { data };
};

export { useMovieFetch };
