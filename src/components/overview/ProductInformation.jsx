import React, { useContext } from "react";
import StyleSelector from './StyleSelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import { OverviewContext } from "./Overview.jsx";
import { postCart } from '../../helpers.js';
import { SiFacebook, SiTwitter, SiPinterest, SiInstagram } from 'react-icons/si';

const ProductInformation = () => {

  const { product, currentStyle, currentSize, setCurrentSize, loading } = useContext(OverviewContext);

  if (loading) {
    return <div className="overview-product-info loading"></div>
  }

  const handleAddToCartClick = () => {
    postCart(currentSize);
    setCurrentSize('');
  }

  return (
    <div className="overview-product-info">
      <h1>{product.name}</h1>
      <section className="body-text">{product.description}</section>
      { currentStyle.sale_price ?
      <div className="sale-price-container">
        <section className="body-text sale-price">{currentStyle.sale_price} USD</section>
        <section className="body-text original-price">{product.default_price} USD</section>
      </div> :
        <section className="body-text price">{product.default_price} USD</section>
      }
      <div className="social-media-container">
        <SiFacebook className="social-media-icon" />
        <SiTwitter className="social-media-icon" />
        <SiPinterest className="social-media-icon" />
        <SiInstagram className="social-media-icon" />
      </div>
      <StyleSelector />
      <SizeSelector />
      <QuantitySelector />
      <div>
        <button className="info-button add" onClick={() => handleAddToCartClick()}>ADD TO BAG</button>
      </div>
    </div>
  )
}

export default ProductInformation;