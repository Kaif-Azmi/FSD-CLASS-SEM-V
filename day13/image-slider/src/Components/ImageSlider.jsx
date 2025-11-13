import React, { useState } from "react";

export default function ImageSlider() {
  const images = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfDB8MHx8fDA%3D"
    ,
    "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfDB8MHx8fDA%3D"
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.container}>
      {/* Left Button */}
      <button onClick={prevSlide} style={{ ...styles.btn, left: "10px" }}>
        ◀
      </button>

      {/* Image */}
      <img src={images[index]} alt="slide" style={styles.image} />

      {/* Right Button */}
      <button onClick={nextSlide} style={{ ...styles.btn, right: "10px" }}>
        ▶
      </button>

      {/* Dots */}
      <div style={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.dot,
              background: i === index ? "black" : "gray",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "800px",
    height: "400px",
    margin: "auto",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    objectFit: "cover",
    transition: "0.3s",
  },
  btn: {
    position: "absolute",
    zIndex: 10,
    padding: "12px 18px",
    border: "none",
    borderRadius: "10px",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },
  dots: {
    position: "absolute",
    bottom: "10px",
    display: "flex",
    gap: "8px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    display: "inline-block",
    cursor: "pointer",
  },
};
