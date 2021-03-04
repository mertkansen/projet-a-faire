import React from "react";
import { SignUp } from "../components";

// Login Page is reusing SignUp component

const Login = () => {
  return (
    <div className="login">
      <SignUp logIn />
    </div>
  );
};

export default Login;
