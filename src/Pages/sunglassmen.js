import React from "react";
import ProductItem from "../Components/ProductItem";
import productsData from "../data/products.json";
import "../Pages/Home.css";

const Sunglassmen = () => {
  const products = productsData["Men's Sunglasses"] || [];

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

export default Sunglassmen;
