import React from 'react';
import ProductData from '../ProductData';

export default function ProductPages({ productId, onBack }) {

  // Finding the products matching productIds
  const product = ProductData.find(item => item.id === productId);

  return (
    <div>
      {/* Back arrow to home page */}
      <div className="arrow-container" onClick={onBack}>
        <img className="backarrow" src="https://archived.thecontrastclub.com/wp-content/uploads/2024/01/arrow-leftpng.png" alt="back arrow"/>
        <h4 className="back_text">BACK</h4>
      </div>
      {/* Container for the video, image and details of product */}
      <div className="productpage-container">
        <div className="product-video">
          <video controls muted>
            <source src={product.video} type="video/webm" className="product-video" alt={product.description}/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="product-img">
          <img src={product.img} className="coll-mock-img" alt={product.description} />
        </div>
        <div className="product-details">
          <h1 className="coll-title">{product.name}</h1>
          <h3 className="item-description">{product.description}</h3>
          <h4 className="item-material-one">{product.material}</h4>
          <h4 className="item-material-two">{product.material2}</h4>
        </div>
      </div>
    </div>
  );
}