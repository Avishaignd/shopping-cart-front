import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { postProduct } from "../lib/api";

export default function AddProduct() {
  const [product, setProduct] = useState({
    productName: "",
    productType: "",
    productId: "",
    price: 0,
    image: "",
    attributes: [],
  });

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setProduct({ ...product, image: file });
    // console.log(event);
  };

  const handleAttributes = (event) => {
    const splitted = event.target.value.split(":");
    let attributeObj = {};
    attributeObj[`${splitted[0]}`] = splitted[1];
    // setProduct({...product, attributes: [attributeObj]})
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("productType", product.productType);
    formData.append("productId", Math.random());
    formData.append("price", product.price);
    formData.append("image", product.image);
    postProduct(formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      if (response.status === 200) {
        alert("Product added");
        window.location.assign("https://shopping-cart-front.netlify.app")
      }
    });
  };

  return (
      <Form
        onSubmit={(event) => handleOnSubmit(event)}
        action="addProduct"
        method="post"
        encType="multipart/form-data"
        id="add-product"
      >
        <Form.Group className="mb-3" >
          <Form.Label>Product name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            onChange={(event) =>
              setProduct({ ...product, productName: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type"
            onChange={(event) =>
              setProduct({ ...product, productType: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product description</Form.Label>
          <Form.Control
            type="text"
            placeholder="format - color:green"
            onChange={(event) => handleAttributes(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product image</Form.Label>
          <Form.File
            type="image/jpeg"
            name="image"
            onChange={(event) => handlePictureChange(event)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            onChange={(event) =>
              setProduct({ ...product, price: event.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add product
        </Button>
      </Form>
  );
}
