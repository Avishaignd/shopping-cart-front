import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddProduct from "./AddProduct";
import TransactionList from "./TransactionList";

export default function AdminPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='mt-5' onClick={handleShow}>Add product</Button>
      <Modal show={show} onHide={handleClose}>
        <AddProduct />
      </Modal>
      <TransactionList />
    </>
  );
}
