export const initialState = {
  userInfo: { username: "", password: "", isSignedUp: false },
  userLoggedIn: false,
  movie: {},
};

export const actionTypes = {
  SET_USER_INFO: "setLoggedIn",
  SET_LOG_IN: "setLogIn",
  SET_MOVIE_INFO: "setMovieInfo",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.term,
      };
    case actionTypes.SET_LOG_IN:
      return {
        ...state,
        userLoggedIn: action.term,
      };
    case actionTypes.SET_MOVIE_INFO:
      return {
        ...state,
        movie: action.term,
      };

    default:
      break;
  }
};
