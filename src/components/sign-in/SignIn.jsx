import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import "./sign-in.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart({ email, password });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          required
          label="email"
        />

        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          required
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  googleSignInStart,
  emailSignInStart: emailAndPassword => emailSignInStart(emailAndPassword)
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
