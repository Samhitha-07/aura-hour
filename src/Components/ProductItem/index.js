import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoMdHeart } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

const ProductItem = ({ image, badgeText, productName, productDescription, price, originalPrice }) => {
  // State to track if heart is clicked
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  // Handle the click event
  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked); // Toggle the state on click
  };


  return (
    <div className="productItem">
      <div className="imgWrapper">
        <img src={image} className="w-100" alt="Product" />
        <span className="badge badge-primary">{badgeText}</span>

        {/* Quick Add Button */}
        <div className="quick-add">
          <Button className="add-btn" color="black">
            <IoAddOutline /> <span className="quick-add-text">Quick Add</span>
          </Button>
        </div>

        <div className="actions">
          <Button onClick={handleHeartClick}>
            {/* Change color based on isHeartClicked state */}
            <IoMdHeart style={{ color: isHeartClicked ? "red" : "rgb(84, 82, 82)" }} />
          </Button>
        </div>
      </div>
      <h3 className="text-description">{productName}</h3>
      <p className="details">{productDescription}</p>
      <span className="text-price">${price}</span>
      <span className="text-strikethrough">${originalPrice}</span>
    </div>
  );
};

export default ProductItem;