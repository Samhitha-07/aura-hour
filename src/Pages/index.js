import React from "react";
import HomeBanner from "../Components/HomeBanner";
import Button from "@mui/material/Button";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import ProductItem from "../Components/ProductItem";

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

  // Poster data
  const posters = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/d8/10/7a/d8107a77f638a200f88698d36e7dd656.jpg",
      alt: "Poster 1",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/96/7a/e7/967ae72b214e3d4dbe3593e40e33f6e2.jpg",
      alt: "Poster 2",
    },
    {
        id: 2,
        image: "https://i.pinimg.com/736x/d8/10/7a/d8107a77f638a200f88698d36e7dd656.jpg",
        alt: "Poster 2",
      },
      {
        id: 2,
        image: "https://i.pinimg.com/736x/96/7a/e7/967ae72b214e3d4dbe3593e40e33f6e2.jpg",
        alt: "Poster 2",
      },
      {
        id: 2,
        image: "https://i.pinimg.com/736x/d8/10/7a/d8107a77f638a200f88698d36e7dd656.jpg",
        alt: "Poster 2",
      },
  ];

  return (
    <>
      <HomeBanner />

      {/* Posters Section */}
      <section className="posters-section">
        <div className="posters-container">
          {posters.map((poster) => (
            <div key={poster.id} className="poster">
              <img src={poster.image} alt={poster.alt} className="poster-image" />
              <Button
                variant="contained"
                className="shop-now-btn"
                onClick={() => alert(`Shop Now for ${poster.alt}`)}
              >
                Shop Now
              </Button>
            </div>
          ))}
        </div>
      </section>

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

      <section className="newsLetterSection">
        <div className="container">
            <div className="row">
                {/* Left Column: Links and Info */}
                <div className="left-column">
                    {/* Customer Care */}
                    <div>
                        <h5>Customer Care</h5>
                        <ul>
                            <li><a href="#">Help & FAQ's</a></li>
                            <li><a href="#">Text Us</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Buy Now, Pay Later</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h5>Info</h5>
                        <ul>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Visit USA Site</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="#">Petal Perks</a></li>
                            <li><a href="#">Give $20, Get $20</a></li>
                            <li><a href="#">Aura & Hour App</a></li>
                            <li><a href="#">Ambassador Program</a></li>
                            <li><a href="#">Student Discount</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Newsletter and Social Links */}
                <div className="right-column ">
                    <h5>Join the Newsletter</h5>
                    <p>Sign up to our newsletter and stay up to date with updates on our latest arrivals, and sales.</p>
                    <form className="Mail">
                        <div className="input-container">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email Address"
                                style={{
                                    outline: "none", // Removes the blue outline
                                    border: "none",  // Removes any default border
                                    background: "#dfd6c7", // Ensures background matches
                                    padding: "10px",
                                    fontSize: "18px",
                                    flex: "1", // Allows the input to grow and fill the row
                                    }}
                            />
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                style={{
                                    height: "35px",
                                    width: "70px",
                                    backgroundColor: "#5a4a3c",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "0", // Matches the border with the input
                                    marginLeft: "10px", // Adds spacing between input and button
                                    fontSize: "18px",
                                    }}
                            >
                            Join
                            </button>
                        </div>
                    </form>

                    <div className="social-icons mt-3">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                            <a href="#"><i className="fab fa-telegram"></i></a>
                        </div>
                            
                    </div>
                </div>
            </div>
            <div className="copyright text-center mt-3"> 
                    <p>&copy; aura & hour</p>  
            </div>
        </div>
     </section>


    </>
  );
};

export default Home;
