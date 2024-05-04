import React, { useState } from 'react';
import ProductPages from './ProductPages';

// Home component responsible for rendering product collection and individual product pages
export default function Home(props) {

  // State to track the selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to set the selected product when a product is clicked
  function renderProductPage(productId) {
    setSelectedProduct(productId);
  }

  // Function to reset the selected product when navigating back
  function resetSelectedProduct() {
    setSelectedProduct(null);
  }

  return (
    <div className="home-container">
      {/* Conditionally renders ProductPages if a product is selected */}
      {selectedProduct ? (
        <ProductPages productId={selectedProduct} onBack={resetSelectedProduct} />
      ) : (
        // Renders collection grid and company information if no product is selected
        <div className="toppage-container">
          <div className="col-title">
            THE LEPIDOPTERA <br /> COLLECTION
            <h4 className="contact">For information please contact</h4>
            <h4 className="emailTag">suvi.ellila@contrastclub.com</h4>
          </div>

          {/* Renders grid of the products and links to the ProductPages */}
          <div className="collections-grid">
            {props.products.map((product, index) => (
              <div key={index} className="product-container" onClick={() => renderProductPage(product.id)}>
                <img src={product.img} className="home-imgs" alt={product.description} />
                <h1 className="col-names">{product.name}</h1>
              </div>
            ))}
          </div>

          {/* Renders company website link */}
          {!selectedProduct && (
            <button className="website-link">
              <a href="https://thecontrastclub.com" target="_blank">COMPANY WEBSITE</a>
            </button>
          )}
        </div>
      )}
      {/* Space added for mobile-responsiveness styling purposes here*/}
      <div className="empty-space"></div>
    </div>
  );
}