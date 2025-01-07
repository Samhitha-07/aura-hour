import React from "react";
import HomeBanner from "../Components/HomeBanner";
import Button from "@mui/material/Button";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import ProductItem from "../Components/ProductItem";
import Newsletter from "../Components/Newsletter";
import Poster from "../Components/Poster";

const Home = () => {
  const productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  // Sample product data for BEST SELLERS
  const bestSellers = [
    {
      image: "https://i.pinimg.com/736x/b8/5e/4b/b85e4b79321872fd03318db4aa5b9981.jpg",
      badgeText: "30% off",
      productName: "SAINT HONORÉ",
      productDescription: "Classic Women's Watch",
      price: 95,
      originalPrice: 120,
    },
    {
      image: "https://i.pinimg.com/736x/09/b2/6b/09b26b141a8fb12d269d99968054bb10.jpg",
      badgeText: "27% off",
      productName: "YUN",
      productDescription: "Classic Vintage Shades",
      price: 150,
      originalPrice: 200,
    },
    {
      image: "https://i.pinimg.com/736x/52/96/80/5296804ea11fa0b1efc72308c4b0f39b.jpg",
      badgeText: "15% off",
      productName: "AMALYS",
      productDescription: "Classic Women's Gold Watch",
      price: 99,
      originalPrice: 120,
    },
    {
      image: "https://i.pinimg.com/736x/ff/97/7b/ff977b903984b12f251f49f40dfad6a9.jpg",
      badgeText: "20% off",
      productName: "RAY-BAN",
      productDescription: "Classic Black Shades",
      price: 170,
      originalPrice: 220,
    },
    {
      image: "https://i.pinimg.com/736x/72/bd/42/72bd4262f2c518b60d330e0cbaadb92e.jpg",
      badgeText: "17% off",
      productName: "ZENITH",
      productDescription: "Classic Silver Men's Watch",
      price: 200,
      originalPrice: 240,
    },
  ];

  // New product data for the second layer (NEW ARRIVALS)
  const newArrivals = [
    {
      image: "https://i.pinimg.com/736x/b8/5e/4b/b85e4b79321872fd03318db4aa5b9981.jpg",
      badgeText: "40% off",
      productName: "DANIEL WELLINGTON",
      productDescription: "Minimalist Watch",
      price: 130,
      originalPrice: 220,
    },
    {
      image: "https://i.pinimg.com/736x/09/b2/6b/09b26b141a8fb12d269d99968054bb10.jpg",
      badgeText: "25% off",
      productName: "FOSSIL",
      productDescription: "Modern Men's Watch",
      price: 180,
      originalPrice: 240,
    },
    {
      image: "https://i.pinimg.com/736x/52/96/80/5296804ea11fa0b1efc72308c4b0f39b.jpg",
      badgeText: "10% off",
      productName: "CASIO G-SHOCK",
      productDescription: "Sporty Men's Watch",
      price: 120,
      originalPrice: 135,
    },
    {
      image: "https://i.pinimg.com/736x/ff/97/7b/ff977b903984b12f251f49f40dfad6a9.jpg",
      badgeText: "50% off",
      productName: "TISSOT",
      productDescription: "Luxury Watch",
      price: 400,
      originalPrice: 800,
    },
    {
      image: "https://i.pinimg.com/736x/72/bd/42/72bd4262f2c518b60d330e0cbaadb92e.jpg",
      badgeText: "33% off",
      productName: "APPLE WATCH",
      productDescription: "Smartwatch",
      price: 300,
      originalPrice: 450,
    },
  ];



  return (
    <>
      <HomeBanner />
      <Poster/>

      {/* BEST SELLERS Section */}
      <section className="homeProducts">
        <div className="col-md-9-productRow">
          <div className="row header-row">
            <h3 className="hd">BEST SELLERS</h3>
            <Button className="viewAll-btn" variant="outlined">
              View all <MdOutlineArrowForwardIos />
            </Button>
          </div>
          <hr className="divider" />
          <div className="product_row w-100 mt-4">
            <Slider {...productSliderOptions}>
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
            </Slider>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS Section */}
      <section className="homeProducts">
        <div className="col-md-9-productRow">
          <div className="row header-row">
            <h3 className="hd">NEW ARRIVALS</h3>
            <Button className="viewAll-btn" variant="outlined">
              View all <MdOutlineArrowForwardIos />
            </Button>
          </div>
          <hr className="divider" />
          <div className="product_row w-100 mt-4">
            <Slider {...productSliderOptions}>
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
            </Slider>
          </div>
        </div>
      </section>
      
      <Newsletter/>


    </>
  );
};

export default Home;
