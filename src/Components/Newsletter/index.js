import React from "react";

const Newsletter = () => {
    return(
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
    )
}

export default Newsletter;