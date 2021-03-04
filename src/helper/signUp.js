const checkIfSignedIn = (userInfo, notify) => {
  userInfo.isSignedUp &&
    notify(
      "Successfully logged in. You`ll be redirected to the Home Page",
      "/"
    );
};

const checkIfUsernameAndPasswordCorrectForLogin = (
  userInfo,
  username,
  password
) => userInfo.username === username && userInfo.password === password;

const checkUsernameAndPassword = (username, password) =>
  username.length >= 4 && password.length >= 4;

export {
  checkIfSignedIn,
  checkIfUsernameAndPasswordCorrectForLogin,
  checkUsernameAndPassword,
};
