import React from "react";
import ProductItem from "../Components/ProductItem";
import productsData from "../data/products.json";
import "../Pages/Home.css";

const Watchwomen = () => {
  const products = productsData["Women's Watch"] || [];

  return (
    <section className="homeProducts">
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            image={product.image}
            badgeText={product.badgeText}
            productName={product.productName}
            productDescription={product.productDescription}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </section>
  );
};

export default Watchwomen;
