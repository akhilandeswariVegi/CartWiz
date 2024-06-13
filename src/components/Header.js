import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";

const Header = () => {
  // Get cart state and dispatch function from context
  const { state: { cart }, dispatch, productDispatch } = CartState();
  const { pathname } = useLocation();
  const isCartPage = pathname.split("/")[1] === "cart";

  // Function to handle search input change
  const handleSearch = (e) => {
    productDispatch({
      type: "FILTER_BY_SEARCH",
      payload: e.target.value,
    });
  };

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand><Link to="/">Cart Wiz</Link></Navbar.Brand>
        {/* Search input (only displayed if not on cart page) */}
        {!isCartPage && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={handleSearch}
            />
          </Navbar.Text>
        )}
        {/* Dropdown for cart */}
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            {/* Cart items */}
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img src={prod.image} className="cartItemImg" alt={prod.name} />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      {/* Delete item button */}
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod })}
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>Go To Cart</Button>
                  </Link>
                </>
              ) : (
                // Message displayed when cart is empty
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
