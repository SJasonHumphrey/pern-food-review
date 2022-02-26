import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const AddReview = () => {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("Rating");
  const [review, setReview] = useState("");

  const navigate = useNavigate();

  const handleSubmitReview = async(e) => {
      e.preventDefault();
      await RestaurantFinder.post(`/${id}/addReview`, {
        reviewer_name: name,
        review: review,
        rating: rating
      })
      navigate("/");
  }

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-4 mb-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Name"
              type="text"
              className="form-control mb-2"
            />
            <div className="form-group col-4 mb-2">
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                id="rating"
                className="custom-select p-2"
                style={{ width: "300%" }}
              >
                <option disabled>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group mt-2">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            id="review"
            className="form-control"
            placeholder="Your Review ..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-warning text-white mt-2" onClick={handleSubmitReview}>Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
