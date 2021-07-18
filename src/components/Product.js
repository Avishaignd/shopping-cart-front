import React, {useContext} from "react";
import { UserContext } from "../lib/context";
import { Card, Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom'

export default function Product(props) {

    const single = props.props
    // console.log(single);
    const user = useContext(UserContext)
    let location = useLocation()

    const addProductToCart = (item) => {
            user.cart.push(item)
            alert("Item added to cart!")
    }

    const removeFromCart = (item) => {
            const filtered = user.cart.filter(product => product.id !== item.id)
            user.cart = filtered
            alert("Item removed from cart!")
            window.location.reload()
    }

  return (
    <>
      <Card className="cards" style={{ width: "18rem" }}>
        <Card.Img className="cards-image" variant="top" src={props.props.image}/>
        <Card.Body>
          <Card.Title className="cards-title">{props.props.title}</Card.Title>
        {location.pathname !== "/cart" ?
          <Button className="cards-button" onClick={() => addProductToCart(single)}>Add to cart</Button>
        :
        <Button className="cards-button" onClick={() => removeFromCart(single)}>Remove from cart</Button>
        }
        </Card.Body>
      </Card>
    </>
  );
}
