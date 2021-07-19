import React from "react";
import { GoogleLogin } from "react-google-login";
import { useLocation } from "react-router-dom";

export default function GoogleAuth() {

  let location = useLocation()
  const responseGoogle = (response) => {
    console.log(response);
    
  };

  return (
    <div>
      <GoogleLogin
        clientId="243046673629-quuff7ge2lkgeehbqavjejimjs2huj67.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
