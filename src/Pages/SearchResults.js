import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductItem from "../Components/ProductItem";
import productsData from "../data/homeProducts.json";
import "./SearchResults.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // Combine all products from all categories into one searchable pool
  const allProducts = [
    ...productsData.bestSellers.map((p) => ({ ...p, category: "Best Sellers" })),
    ...productsData.newArrivals.map((p) => ({ ...p, category: "New Arrivals" })),
  ];

  // Filter products: search across productName, productDescription, badgeText, and price
  const results = query.trim()
    ? allProducts.filter((product) => {
        const searchTerm = query.toLowerCase();
        return (
          product.productName.toLowerCase().includes(searchTerm) ||
          product.productDescription.toLowerCase().includes(searchTerm) ||
          product.badgeText.toLowerCase().includes(searchTerm) ||
          String(product.price).includes(searchTerm) ||
          String(product.originalPrice).includes(searchTerm)
        );
      })
    : [];

  return (
    <section className="search-results-page">
      <div className="search-results-header">
        <h2 className="search-results-title">
          {results.length > 0
            ? `Showing ${results.length} result${results.length > 1 ? "s" : ""} for `
            : "No results found for "}
          <span className="search-query">"{query}"</span>
        </h2>
      </div>

      {results.length > 0 ? (
        <div className="product-grid search-grid">
          {results.map((product, index) => (
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
      ) : (
        <div className="no-results">
          <p className="no-results-text">
            We couldn't find any products matching your search. Try a different keyword!
          </p>
          <div className="search-suggestions">
            <span>Popular searches:</span>
            <a href="/search?q=watch">Watch</a>
            <a href="/search?q=shades">Shades</a>
            <a href="/search?q=classic">Classic</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
