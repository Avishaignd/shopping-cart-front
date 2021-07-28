import React, { useContext} from "react";
import { UserContext } from "../lib/context";
import Product from "./Product";

export default function Cart() {
  const user = useContext(UserContext);
  return (
    <>
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
