import React from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filters = () => {
  const { productDispatch, productState } = CartState();
  const { byStock, byFastDelivery, sort, byRating } = productState;

  // Function to handle sort change
  const handleSortChange = (value) => {
    productDispatch({
      type: "SORT_BY_PRICE",
      payload: value,
    });
  };

  // Function to handle filter by stock
  const handleFilterByStock = () => {
    productDispatch({
      type: "FILTER_BY_STOCK",
    });
  };

  // Function to handle filter by delivery
  const handleFilterByDelivery = () => {
    productDispatch({
      type: "FILTER_BY_DELIVERY",
    });
  };

  // Function to handle clearing filters
  const handleClearFilters = () => {
    productDispatch({
      type: "CLEAR_FILTERS",
    });
  };

  return (
    <div className="filters">
      <span className="title">Filters</span>
      <span>
        <Form.Check
          inline
          label="Low to High"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => handleSortChange("lowToHigh")}
          checked={sort === "lowToHigh"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="High to Low"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => handleSortChange("highToLow")}
          checked={sort === "highToLow"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={handleFilterByStock}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={handleFilterByDelivery}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) => productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light" onClick={handleClearFilters}>
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
