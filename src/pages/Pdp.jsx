// pages/ProductDetailPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/productsData.js" ;
import ProductCard from '../components/ProductCard.jsx' ;
import "../scss/section/pdp.scss";


const ProductDetailPage = () => {

  const { url } = useParams();
  const product = productData.find(p => p.url === url);
  const [mainIndex, setMainIndex] = useState(0);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="pdp-wrapper container">
      {/* MAIN IMAGE + INFO */}
      <div className="pdp-main">
        {/* IMAGE COLUMN */}
        <div className="pdp-images">
          <div className="image-container">
            <img
              src={product.images[mainIndex]}
              alt={product.title}
              className="main-img"
            />
          </div>

          {/* desktop thumbnails */}
          <div className="thumbnails">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`thumb ${i === mainIndex ? "active" : ""}`}
                onClick={() => setMainIndex(i)}
              />
            ))}
          </div>

          {/* mobile carousel dots */}
          <div className="dots">
            {product.images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === mainIndex ? "active" : ""}`}
                onClick={() => setMainIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* INFO COLUMN */}
        <div className="pdp-info">
          <h1>{product.title}</h1>
          <p className="price">MRP ₹{product.price}</p>
          <p className="bulk">Bulk price for 50+ ₹{product.price}</p>

          <div className="contains">
            <p><strong>This hamper contains</strong></p>
            <ul>
              {product.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

       {/* ECO BOX */}
      <div className="eco-box">
        <p><em>This hamper is packaged in zero-plastic.</em></p>
        <ul>
        <li>🌿 {product.carbonReduction}% less carbon emissions</li>
        <li>♻️ {product.plasticReduction}% less plastic pollution</li>
        </ul>
      </div>

        </div>
      </div>


      {/* RELATED */}
      <div className="related">
        <h2>More Gift Hampers</h2>
        <div className="related-grid">
          {productData
            .filter(p => p.url !== product.url)
            .slice(0, 3)
            .map(p => (
              <ProductCard
                key={p.id}
                image={p.images[0]}
                title={p.title}
                price={p.price}
                description={p.description.slice(0, 2).join(", ") + "..."}
                link={`/products/${p.url}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
