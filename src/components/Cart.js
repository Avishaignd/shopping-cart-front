import React, { useContext} from "react";
import { Button } from "react-bootstrap";
import { checkout } from "../lib/api";
import { UserContext } from "../lib/context";
import Product from "./Product";

export default function Cart() {
  const user = useContext(UserContext);
  const handleCheckout = async () => {
      checkout(user)
  }

  return (
    <>
    <Button onClick={handleCheckout}>Proceed to checkout</Button>
      {user.user && user.user.cart ? (
        user.user.cart.map((product) => {
          return <Product key={product.id} props={product} />;
        })
        ) : (
        <h1>Your cart is empty</h1>
      )}
    </>
  );
}
