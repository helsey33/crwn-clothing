import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import "./authentication.scss";

export default function Authentication() {
  return (
    <div className="authentication">
      <SignIn />
      <SignUp />
    </div>
  );
}
