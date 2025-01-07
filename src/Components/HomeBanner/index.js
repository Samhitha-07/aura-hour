import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
        };

    return (
        <div className="homeBannerSection">
        {/* Slider with properly nested items */}
            <Slider {...settings}>
                <div className="item">
                    <img src="/images/Banner/HomeBanner2.jpg" className="w-100" alt="Banner 1"/>
                </div>
                <div className="item">
                    <img src="/images/Banner/HomeBanner3.jpg" className="w-100" alt="Banner 2"/>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner;
