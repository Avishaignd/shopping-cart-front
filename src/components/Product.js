import React, {useContext} from "react";
import { UserContext } from "../lib/context";
import { Card, Button } from "react-bootstrap";

export default function Product(props) {

    const single = props.props
    const user = useContext(UserContext)
    const addProductToCart = (item) => {
            user.cart.push(item)
            console.log(user.cart);
    }

  return (
    <>
      <Card className="cards" style={{ width: "18rem" }}>
        <Card.Img className="cards-image" variant="top" src={props.props.image}/>
        <Card.Body>
          <Card.Title className="cards-title">{props.props.title}</Card.Title>
          <Button className="cards-button" onClick={() => addProductToCart(single)}>Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}
