import React from "react";

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
  }
  return ( 
  <div className="text-danger">
    {stars}
  </div>
  )
};

export default Rating;
