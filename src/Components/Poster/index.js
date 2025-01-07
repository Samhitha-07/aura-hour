import React from "react";
import Button from "@mui/material/Button";

const Poster = () => {
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
    )
}

export default Poster;