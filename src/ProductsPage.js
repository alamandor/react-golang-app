// src/ProductsPage.js
import React, { useState, useEffect } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from Golang backend
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <div className="content">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.ID}>
            <img src={product.ImageURL} alt={product.Name} />
            <h3>{product.Name}</h3>
            <p>${product.Price}</p>
            <button>More Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
