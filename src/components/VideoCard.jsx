import React from "react";
import "../styles/VideoCard.css";

// ROUTE

import { useHistory } from "react-router-dom";

// CONTEXT

import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

// VISUAL

import LinesEllipsis from "react-lines-ellipsis";
import { ThumbUpSharp } from "@material-ui/icons";

// for getting images from tmdb

import {BASE_URL} from "../constants";

/*
  Depends on the data coming from movie object,
  When user clicks on a videocard then sends the user 
  to the details page and updates the selected movie object in the context.
*/

const VideoCard = ({ movie }) => {
  const history = useHistory();
  const [, dispatch] = useStateValue();

  const handleClick = () => {
    dispatch({
      type: actionTypes.SET_MOVIE_INFO,
      term: movie,
    });

    history.push("/details");
  };

  return (
    <div className="videoCard" onClick={handleClick}>
      <img src={BASE_URL + movie.backdrop_path} alt="movie poster" />
      
      <p>
        <LinesEllipsis
          text={movie.overview}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </p>

      <h2>
        <LinesEllipsis
          text={movie.original_name || movie.title}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </h2>

      <p className="videoCard__stats">
        {movie.release_date || movie.first_air_date} · <ThumbUpSharp />{" "}
        {movie.vote_count}
      </p>
    </div>
  );
};

export default VideoCard;
