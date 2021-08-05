import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { checkout, getUser } from "../lib/api";
import { UserContext } from "../lib/context";
import Product from "./Product";

export default function Cart() {
  const user = useContext(UserContext);
  const handleCheckout = async () => {
    checkout(user);
  };

  useEffect(() => {
    // checking if there's any change in the user's cart and re-rendering if needed
    if (user.user) {
      getUser(user.user._id).then((response) => {
        user.setUser(response);
      });
    }
  }, [user.user.cart]);

  return (
    <>
      <Button
        id="checkout"
        disabled={user.user === null || user.user.cart.length === 0}
        onClick={handleCheckout}
      >
        Proceed to checkout
      </Button>
      {user.user && user.user.cart ? (
        user.user.cart.map((product) => {
          return <Product key={product.id} props={product} />;
        })
      ) : (
        <h1 id="empty">Your cart is empty</h1>
      )}
    </>
  );
}
