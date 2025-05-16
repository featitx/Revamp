// components/ProductCard.jsx
import React from "react";  
import "../scss/component/productcard.scss" ; 

const ProductCard = ({ image, title, price, description, link }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-content">
      <h2 className="product-title">{title}</h2>
      <p className="product-price">Mrp₹ {price}</p>
      <p className="product-bulk">Bulk price for 50+ ₹ {price}</p>
      <p className="hamper-contain">This hamper contains</p>
      <p className="product-description">{description}</p>
      <a href={link} className="product-link">View details</a>
      </div>
    </div>
  );
};

export default ProductCard;
