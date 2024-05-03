import React, { useState } from 'react';
import ProductPages from './ProductPages';

export default function Home(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function renderProductPage(productId) {
    setSelectedProduct(productId);
  }

  function resetSelectedProduct() {
    setSelectedProduct(null);
  }

  return (
    <div className="home-container">
      {selectedProduct ? (
        <ProductPages productId={selectedProduct} onBack={resetSelectedProduct} />
      ) : (
        <div className="toppage-container">
          <div className="col-title">
            THE LEPIDOPTERA COLLECTION
            <h4 className="contact">For information please contact</h4>
            <h4 className="emailTag">suvi.ellila@contrastclub.com</h4>
          </div>

          <div className="collections-grid">
            {props.products.map((product, index) => (
              <div key={index} className="product-container" onClick={() => renderProductPage(product.id)}>
                <img src={product.img} className="home-imgs" alt={product.name} />
                <h1 className="col-names">{product.name}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {!selectedProduct && (
        <button className="website-link">
          <a href="https://thecontrastclub.com" target="_blank">COMPANY WEBSITE</a>
        </button>
      )}
    </div>
  );
}