import React, { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Image from "./Image.jsx";
import {fetchStyles} from "../../helpers.js";
import {OverviewContext} from "./Overview.jsx";


const ImageCarousel = () => {

var currentStyle = {
  style_id: 240500,
  name: "Forest Green & Black",
  original_price: "140.00",
  sale_price: null,
  default: true,
  photos: [
      {
          thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      },
      {
          thumbnail_url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
      },
      {
          thumbnail_url: "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
      },
      {
          thumbnail_url: "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      },
      {
          thumbnail_url: "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      },
      {
          thumbnail_url: "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      }
  ],
  skus: {
      1394769: {
          quantity: 8,
          size: "XS"
      },
      1394770: {
          quantity: 16,
          size: "S"
      },
      1394771: {
          quantity: 17,
          size: "M"
      },
      1394772: {
          quantity: 10,
          size: "L"
      },
      1394773: {
          quantity: 15,
          size: "XL"
      },
      1394774: {
          quantity: 4,
          size: "XL"
      }
  }
}

  const imageCarouselRef = useRef(null);
  const [images, setImages] = useState([]);
  // const [productId, setProductId] = useState(product_id);

  const {productId} = useContext(OverviewContext);
  console.log(productId);

  useEffect(() => {
    fetchStyles(productId)
      .then((response) => {
        console.log(response);
        setImages(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="overview-images">
      <ul ref={imageCarouselRef} className="image-carousel">
        {currentStyle.photos.map(image =>
          <Image key={image.id} slide={image}/>
        )}
      </ul>
    </div>
  )
}

ImageCarousel.propTypes = {
  product_id: PropTypes.number.isRequired
}

export default ImageCarousel;