import React, { useEffect } from "react";
import "../styles/Home.css";

import { useHistory } from "react-router-dom";

// CONTEXT API

import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

const Home = () => {
  const history = useHistory();
  const [{ userLoggedIn }, dispatch] = useStateValue();

  // Checks if user logged in if not, then takes the user to the Sign Up page.

  useEffect(() => {
    !userLoggedIn && history.push("/signup");
  }, [userLoggedIn, history]);

  // When clicked log out, sets the userLoggedIn property in the context to false.

  const logOut = () => {
    dispatch({
      type: actionTypes.SET_LOG_IN,
      term: false,
    });
  };

  return (
    <div className="home">
      <div className="home__welcome">
        <h1>HOME PAGE</h1>
        <p>WELCOME</p>
      </div>

      <div className="home__info">
        <h1>Lorem, ipsum.</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <center>
          <button className="home__logOutButton" onClick={logOut}>
            Log Out
          </button>
        </center>
      </div>

      <div className="home__quoteOfDay">
        <h1>Quote of the day: Dum spiro spero!</h1>
      </div>
    </div>
  );
};

export default Home;
