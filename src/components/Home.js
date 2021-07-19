import React, { useState, useEffect, useContext } from "react";
import { getAllProducts, getP } from "../lib/api";
import { ProductContext, UserContext } from "../lib/context";
import ProductList from "./ProductList";
import { Navbar } from "react-bootstrap";
import Cart from './Cart'
import AdminPage from "./AdminPage";
import Authenticate from "./Authenticate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
  const myContext = useContext(ProductContext);
  const user = useContext(UserContext);

  const setProds = async () => {
    let prods = await getAllProducts();
    myContext.products = prods;
  };
  setProds();

  return (
    <>
      <Router>
        <Navbar
          id="nav-bar"
          bg="dark"
          fixed="top"
        >
          <Link to="/">Home</Link>
          <Link to="/auth">Auth</Link>
          <Link to="/cart">Cart</Link>
          {user && user.isAdmin ? (
            <Link className="links" to="/admin">
              Admin
            </Link>
          ) : (
            <></>
          )}
        </Navbar>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route to="/auth">
              <Authenticate/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
