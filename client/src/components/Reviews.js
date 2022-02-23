import React from "react";
import Rating from "./Rating";

const Reviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
      <div className="card bg-light mb-3 mr-4" style={{ maxWidth: "30%" }}>
        <div className="card-header d-flex justify-content-between"></div>
        <span>Jim</span>
        <span><Rating rating={3}/></span>
        <div className="card-body">
            <p className="card-text">Review Text...</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
