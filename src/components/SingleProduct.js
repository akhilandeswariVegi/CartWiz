import React from "react";
import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

// SingleProduct component to display individual product details
const SingleProduct = ({ prod }) => {
  const { state: { cart }, dispatch } = CartState();

  // Function to handle adding or removing a product from the cart
  const handleCartAction = () => {
    const actionType = cart.some((p) => p.id === prod.id) ? "REMOVE_FROM_CART" : "ADD_TO_CART";
    dispatch({ type: actionType, payload: prod });
  };

  // Function to determine button text based on stock availability and cart status
  const getButtonText = () => {
    if (!prod.inStock) return "Out of Stock";
    if (cart.some((p) => p.id === prod.id)) return "Remove from Cart";
    return "Add to Cart";
  };

  // Function to determine button variant based on cart status
  const getButtonVariant = () => {
    return cart.some((p) => p.id === prod.id) ? "danger" : "primary";
  };

  return (
    <div className="products">
      <Card>
        {/* Product image */}
        <Card.Img variant="top" src={prod.image} alt={prod.name} class="card-img-top" />
        <Card.Body>
          {/* Product name */}
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            {/* Product price */}
            <span>₹ {prod.price.split(".")[0]}</span>
            {/* Display delivery time based on fast delivery */}
            {prod.fastDelivery ? <div>Fast Delivery</div> : <div>3 days delivery</div>}
            {/* Display product rating */}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {/* Add to cart button */}
          <Button
            onClick={handleCartAction}
            disabled={!prod.inStock}
            variant={getButtonVariant()}
          >
            {getButtonText()}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
