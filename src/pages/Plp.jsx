// pages/ProductListingPage.jsx
import React from "react";
import ProductCard from "../components/productcard";
import productData from "../data/productsData";
import "../scss/app.scss";


const ProductListingPage = () => {
  return (
    <div className="plp-wrapper container">
      {productData.map(product => (
        <ProductCard
          key={product.id}
          image={product.images[0]}
          title={product.title}
          price={product.price}
          description={product.description}
          link={`/products/${product.url}`}
        />
      ))}
    </div>
  );
};

export default ProductListingPage;
