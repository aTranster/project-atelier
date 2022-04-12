import React, {useRef, useState, useEffect, useMemo, useCallback} from 'react';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import {RelatedCards, OutfitCards} from './CardContainers.jsx';

  // TODO: If item is removed from outfit list, re-check rightmost position
  // TODO: Lock scrolling
const CardCarousel = ({related, length}) => {
  const carouselRef = useRef({});
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const cardWidth = useMemo(() => Math.ceil(carouselRef.current.clientWidth/3), [carouselRef.current.clientWidth]);
  const scrollPoint = () => carouselRef.current.scrollLeft;

  //These functions scroll the content within the carousel-viewport div
  const scrollLeft = useCallback(() => {
      checkArrows(carouselRef.current.scrollLeft - cardWidth);
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
      });
  });

  const scrollRight = useCallback(() => {
    if (right) {
      checkArrows(carouselRef.current.scrollLeft + cardWidth);
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
    }
  });

  useEffect(() => {
    checkArrows(carouselRef.current.scrollLeft);
  }, [length]);

  const checkArrows = (scrollPoint) => {
    if ((scrollPoint + (cardWidth * 3)) >= cardWidth * length) {
      setRight((prev) => prev ? false : prev);
    } else {
      setRight((prev) => prev ? prev : true);
    }

    if (scrollPoint <= 0) {
      setLeft((prev) => prev ? false : prev);
    } else {
      setLeft((prev) => prev ? prev : true);
    }
  };

  useEffect(() => {
    if (length < 4) {
      setRight((prev) => prev ? false : prev);
    } else {
      setRight((prev) => prev ? prev : true);
    }
  }, [length])

  return (
    <div className="carousel-container" id="modal"> {/* This holds the carousel viewport and the buttons */}
      <LeftArrow scroll={scrollLeft} view={left} />
      <div ref={carouselRef} className="carousel-viewport"> {/* The portion of the carousel that is visible to the user */}
        {related ? <RelatedCards /> : <OutfitCards />}
      </div>
      <RightArrow scroll={scrollRight} view={right} />
    </div>
  );
};

const LeftArrow = ({scroll, view}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      scroll();
    }
    setTimeout(() => setClicked(false), 250);
  };

  return (
    <React.Fragment>
      <button onClick={handleClick} className="arrow">
        {view ? <AiOutlineDoubleLeft size={40} /> : null}
      </button>
    </React.Fragment>
  );
};

const RightArrow = ({scroll, view}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      scroll();
    }
    setTimeout(() => setClicked(false), 250);
  };

  return (
    <React.Fragment>
      <button onClick={handleClick} className="arrow">
        {view ? <AiOutlineDoubleRight size={40} /> : null}
      </button>
    </React.Fragment>
  );
};

export default CardCarousel;
