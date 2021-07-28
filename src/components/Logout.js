import React from "react";
import { Button } from "react-bootstrap";

export default function Logout() {
  const handleLogout = () => {
      window.location.reload();
  };

  return <Button onClick={handleLogout}>Log Out</Button>;
}
