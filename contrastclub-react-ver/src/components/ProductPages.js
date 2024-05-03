import React from 'react';
import ProductData from '../ProductData';

export default function ProductPages({ productId, onBack }) {
  // Find the product with the matching productId
  const product = ProductData.find(item => item.id === productId);

  if (!product) {
    // If no product found, you can render an error message or handle it as per your requirement
    return <div>Error: Product not found</div>;
  }

  return (

<div>

<div class="arrow-container" onClick={onBack}>
<img class="backarrow" src="https://thecontrastclub.com/wp-content/uploads/2024/01/arrow-leftpng.png" alt="back arrow"/>
<h4 class="back_text">BACK</h4>
</div>

    <div className="productpage-container">

    <div className="product-video">
    <video controls muted>
          <source src={product.video} type="video/webm" className="product-video"/>
          Your browser does not support the video tag.
    </video>
    </div>

    <div className="product-img">
        <img src={product.img} alt={product.name} className="coll-mock-img"/>
        </div>


      <div className="product-details">
          <h1 className="coll-title">{product.name}</h1>
          <h3 className="item-description">{product.description}</h3>
          <h4 className="item-material-one">{product.material}</h4>
          <h4 class="item-material-two">{product.material2}</h4>
      </div>

    </div>
    </div>
  );}
