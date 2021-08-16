import React, { useEffect, useContext, useState } from "react";
import { getAllProducts } from "../lib/api";
import { ProductContext, UserContext } from "../lib/context";
import ProductList from "./ProductList";
import { Navbar } from "react-bootstrap";
import Cart from "./Cart";
import AdminPage from "./AdminPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import Logout from "./Logout";

export default function Home() {
  const productsContext = useContext(ProductContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("bingo");
    console.log(UserContext.user);
    if (UserContext.user) {
      setUserData(UserContext.user);
    }
  }, []);

  useEffect(() => {
    const setProds = async () => {
      let prods = await getAllProducts();
      productsContext.products = prods;
    };
    setProds();
  }, [productsContext]);
  
  const setUser = (userNewData) => {
    if (userNewData) setUserData(userNewData);
  };

  return (
    <UserContext.Provider
      value={{
        user: userData,
        setUser: setUser,
      }}>
      <Router>
        <Navbar id="nav-bar" bg="dark" fixed="top">
          {!userData && <Link to="/">Login</Link>}
          { userData && <Logout />}
          <Link to="/cart">Cart</Link>
          <Link to="/products">Products</Link>
          {userData && userData.isAdmin && (
            <Link className="links" to="/admin">
              Admin
            </Link>
          )}
        </Navbar>
        <Switch>
          <Route exact path="/">
            {userData ? <h1 className="mt-5">Welcome {userData.name}</h1> : <GoogleAuth />}
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
