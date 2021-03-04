import React, { useEffect } from "react";
import "../styles/DetailPage.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { ThumbUpSharp } from "@material-ui/icons";
import { BASE_URL } from "../constants";

// Gets the movie info from context

const DetailPage = () => {
  const history = useHistory();
  const [{ movie }] = useStateValue();

  // Checks if user clicked on a movie
  // if not then sends the user back to movies page

  useEffect(() => {
    !movie.id && history.push("/movies");
  }, [movie, history]);

  const handleClick = (e) => history.push("/movies");

  return (
    <div className="detailPage">
      <img src={BASE_URL + movie.backdrop_path} alt="movie poster" />

      <div className="detailPage__infobox">
        <p>{movie.overview}</p>

        <h2>{movie.original_name || movie.title}</h2>
        <div className="detailPage__buttonContainer">
          <p className="detailPage__stats">
            {movie.release_date || movie.first_air_date} · <ThumbUpSharp />{" "}
            {movie.vote_count}
          </p>
          <button className="detailPage__backButton" onClick={handleClick}>
            Back To Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
