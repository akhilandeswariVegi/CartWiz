import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// Rating component to display star ratings
const Rating = ({ rating, onClick, style }) => {
  // Function to render star icon based on rating
  const renderStarIcon = (index) => {
    return rating > index ? <AiFillStar fontSize="15px" /> : <AiOutlineStar fontSize="15px" />;
  };

  // Function to handle click event on star icon
  const handleStarClick = (index) => {
    onClick(index);
  };

  return (
    <>
      {/* Render star icons based on rating */}
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => handleStarClick(i)} style={style}>
          {renderStarIcon(i)}
        </span>
      ))}
    </>
  );
};

export default Rating;
