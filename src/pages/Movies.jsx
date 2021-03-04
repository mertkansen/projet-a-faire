import React, { useState, useEffect } from "react";
import "../styles/Movies.css";
import { VideoCard } from "../components";
import { useMovieFetch } from "../hooks";

// ACTIVITY INDICATOR
import { Digital } from "react-activity";
import "react-activity/dist/react-activity.css";

// Gets the information needed from a custom hook, useMovieFetch, made for this component.

// Shows an activity indicator before showing movies

const Movies = () => {
  const { data } = useMovieFetch();
  const [loading, setLoading] = useState(true);

  // After 1.2s closes the Activity Indicator
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <div classname="movies__container">
      {loading ? (
        <div className="movies__indicator">
          <Digital size={50} />
        </div>
      ) : (
        <>
          <h1 className="movies__pageTitle">Trending Movies</h1>

          <div className="movies">
            {data.map((movie) => (
              <VideoCard key={movie.backdrop_path} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Movies;
