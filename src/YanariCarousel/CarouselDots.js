import './CarouselDots.css';

import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function CarouselDots (props) {
  const {
    carouselIndex,
    items,
    setCarouselIndex,
  } = props;
  return (
    <div className = "myy-carousel__dots-container">
      {items.map((data, index) => {
        return (
          <button
            className = "myy-carousel__dot-button"
            key = {index}
            onClick = {() => setCarouselIndex(index)}
            type = "button"
          >
            <div className = {cn('myy-carousel__dot', {'active': index === carouselIndex})}/>
          </button>
        );
      })}
    </div>
  );
}

CarouselDots.propTypes = {
  carouselIndex: PropTypes.number.isRequired,
  items: PropTypes.instanceOf(Object).isRequired,
  setCarouselIndex: PropTypes.func.isRequired,
};

export default CarouselDots;