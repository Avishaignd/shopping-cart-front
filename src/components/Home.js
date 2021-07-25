import React, { useState, useEffect, useContext } from "react";
import { getAllProducts, getUser } from "../lib/api";
import { ProductContext, UserContext } from "../lib/context";
import ProductList from "./ProductList";
import { Navbar } from "react-bootstrap";
import Cart from './Cart'
import AdminPage from "./AdminPage";
import Authenticate from "./Authenticate";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

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
          <Link to="/">Login</Link>
          <Link to="/auth">Auth</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/products">Products</Link>
          {user.user && user.user.isAdmin ? (
            <Link className="links" to="/admin">
              Admin
            </Link>
          ) : (
            <></>
          )}
        </Navbar>
        <Switch>
          <Route exact path="/">
            {/* <ProductList /> */}
            {
              user.user ? 
              <h1>HELLO!</h1>
              :
            <Authenticate />
            }
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route path="/cart/:id">
            <Cart />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route to="/auth">
              <GoogleAuth/>
          </Route>
          {/* <Route path="/:id">
            <ProductList />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}
