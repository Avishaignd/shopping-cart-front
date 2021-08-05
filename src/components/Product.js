import React, { useContext } from "react";
import { UserContext } from "../lib/context";
import { Card, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { sendProductToCart, removeProductFromCart } from '../lib/api'

export default function Product(props) {
  const single = props.props;
  // console.log(single);
  const user = useContext(UserContext);
  let location = useLocation();

  const addProductToCart = async (item) => {
    sendProductToCart({item: item, user: user.user._id});
    alert("Item added to cart")
  };

  const removeFromCart = async (item) => {
    removeProductFromCart({item: item, user: user.user._id})
    alert("item removed from cart")
  };

  return (
    <>
      <Card className="cards mt-5" style={{ width: "18rem" }}>
        <Card.Img
          className="cards-image"
          variant="top"
          src={props.props.image}
        />
        <Card.Body>
          <Card.Title className="cards-title">
            {props.props.productName}
          </Card.Title>
          <Card.Text>{props.props.price} $</Card.Text>
          {location.pathname !== "/cart" ? (
            <Button
              className="cards-button"
              onClick={() => addProductToCart(single)}
            >
              Add to cart
            </Button>
          ) : (
            <Button
              className="cards-button"
              onClick={() => removeFromCart(single)}
            >
              Remove from cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
