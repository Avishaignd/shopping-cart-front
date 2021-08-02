import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { UserContext } from "../lib/context";

export default function GoogleAuth() {
  const user = useContext(UserContext)
  const responseGoogle = (response) => {
    console.log("hello"+response);
  };

  const handleLogin = async googleData => {
    const res = await fetch("https://shopping-cart-back.herokuapp.com/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    user.setUser({ ...data.user })
    console.log('userContext', user)
  }

  return (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
  );
}
