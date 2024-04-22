import React from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products }, // Array of products
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  // Function to transform products based on filter criteria
  const transformProducts = () => {
    let sortedProducts = products;

    // Sorting products based on price (if sort criteria is applied)
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    // Filtering out products based on stock availability
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    // Filtering out products for fast delivery
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    // Filtering out products based on rating criteria
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    // Filtering out products based on search query
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {/* Mapping and rendering SingleProduct component for each transformed product */}
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
