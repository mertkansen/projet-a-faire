import React, { useState, useRef, useEffect } from "react";
import "../styles/SignUp.css";

// ROUTE

import { useHistory } from "react-router-dom";

// NOTIFICATION

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CONTEXT

import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

// HELPER METHODS

import {
  checkIfSignedIn,
  checkIfUsernameAndPasswordCorrectForLogin,
  checkUsernameAndPassword,
} from "../helper/signUp";

// If logIn prop passed, this reusable component acts as if it's login component

// unless it's a sign up component

const SignUp = ({ logIn }) => {
  const [{ userInfo }, dispatch] = useStateValue();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  // Second prop is to send user to another page.

  const notify = (text, to) => {
    toast(text);
    to && setTimeout(() => history.push(to), 3000);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSignUp = () => {
    dispatch({
      type: actionTypes.SET_USER_INFO,
      term: { username, password, isSignedUp: true },
    });

    // Show notification

    notify("User Signed Up. You'll be redirected to the Login page", "/login");
  };

  const handleLogin = () => {
    if (
      checkIfUsernameAndPasswordCorrectForLogin(userInfo, username, password)
    ) {
      // Sets the login to true

      dispatch({
        type: actionTypes.SET_LOG_IN,
        term: true,
      });
      
      checkIfSignedIn(userInfo, notify);
    } else {
      notify("Email or Password is incorrect");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    // checks if username and password is acceptable
    
    if (checkUsernameAndPassword(username, password)) {
      switch (e.target.name) {
        case "logIn":
          handleLogin();
          break;
        case "signUp":
          handleSignUp(dispatch, actionTypes, username, password, notify);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="signUp">
      <div className="signUp__container">
        <h1>{logIn ? "Log In" : "Sign Up"}</h1>
        <form id="myForm" onClick={handleClick}>
          <h5 className="signUp__titre">Username</h5>
          <input
            ref={inputRef}
            className={
              username.length > 0 ? (username.length < 4 ? "less" : "more") : ""
            }
            value={username}
            placeholder="Username must be at least 4 characters long"
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5 className="signUp__titre">Password</h5>
          <input
            className={
              password.length > 0 ? (password.length < 4 ? "less" : "more") : ""
            }
            disabled={username.length < 4}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password must be at least 4 characters long"
            type="password"
          />

          {logIn ? (
            <button
              type="submit"
              name="logIn"
              className={`signUp__logInButton ${password.length < 4 && 'movies__disabledButton'}`}
              disabled={password.length < 4}
            >
              Log in
            </button>
          ) : (
            <>
              <p>
                You need to <b>Sign Up</b> and <b>Login</b> to see the Home
                page...
              </p>
              <button
                name="signUp"
                className={`signUp__signUpButton ${password.length < 4 && 'movies__disabledButton'}`}
                type="submit"
                disabled={password.length < 4}
              >
                Create your account
              </button>
            </>
          )}

          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
