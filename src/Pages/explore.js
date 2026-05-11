import React, { useMemo } from "react";
import ProductItem from "../Components/ProductItem";
import productsData from "../data/products.json";
import "../Pages/Home.css";

const Explore = () => {
  // Flatten all categories into one array and shuffle randomly
  const allProducts = useMemo(() => {
    const combined = Object.values(productsData).flat();
    // Fisher-Yates shuffle for true randomness
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }
    return combined;
  }, []);

  return (
    <section className="homeProducts">
      <div className="product-grid">
        {allProducts.map((product, index) => (
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

export default Explore;
