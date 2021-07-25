import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { useLocation } from "react-router-dom";
import { UserContext } from "../lib/context";

export default function GoogleAuth() {

  const user = useContext(UserContext)

  const responseGoogle = (response) => {
    console.log(response);
    
  };
  const handleLogin = async googleData => {
    const res = await fetch("http://localhost:5000/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log(data);
    user.user = data.user
    // store returned user somehow
  }

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
