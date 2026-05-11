import React from "react";
import HomeBanner from "../Components/HomeBanner";
import Button from "@mui/material/Button";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ProductItem from "../Components/ProductItem";
import Poster from "../Components/Poster";
import "./Home.css";
import productsData from "../data/homeProducts.json";

const Home = () => {
  const { bestSellers, newArrivals } = productsData;

  return (
    <>
      <HomeBanner />
      <Poster />

      {/* BEST SELLERS Section */}
      <section className="homeProducts">
        <div className="col-md-9-productRow">
          <div className="row header-row">
            <h3 className="hd">BEST SELLERS</h3>
            <Button className="viewAll-btn" variant="outlined" href="/explore">
              View all <MdOutlineArrowForwardIos />
            </Button>
          </div>
          <hr className="divider" />
          <div className="product-grid mt-4">
            {bestSellers.map((product, index) => (
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
        </div>
      </section>

      {/* NEW ARRIVALS Section */}
      <section className="homeProducts">
        <div className="col-md-9-productRow">
          <div className="row header-row">
            <h3 className="hd">NEW ARRIVALS</h3>
            <Button className="viewAll-btn" variant="outlined" href="/explore">
              View all <MdOutlineArrowForwardIos />
            </Button>
          </div>
          <hr className="divider" />
          <div className="product-grid mt-4">
            {newArrivals.map((product, index) => (
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
        </div>
      </section>


    </>
  );
};

export default Home;
