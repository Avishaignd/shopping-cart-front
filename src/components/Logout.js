import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../lib/context";

export default function Logout() {
  const user = useContext(UserContext)

  const handleLogout = () => {
      user.setUser(null)
      window.location.assign("https://shopping-cart-front.netlify.app")
  };

  return <Button id='logout' variant='secondary' onClick={handleLogout}>Log Out</Button>;
}
