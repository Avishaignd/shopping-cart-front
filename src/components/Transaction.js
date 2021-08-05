import React from "react";
import Card from 'react-bootstrap/Card'

export default function Transaction(props) {

  return (
    <Card className='mt-5' style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>
          User: {props.props.user.name} <br/>
          Product: {props.props.products[0].productName}<br/>
          Price: {props.props.products[0].price}$
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
