import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestuarantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import Rating from "../components/StarRating";
import AddReview from "../components/AddReview";
import Reviews from "../components/Reviews";



const Restaurant = () => {
  const {id} = useParams();

  const {selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

  useEffect(() =>{
    const fetchData = async () => {
    const response = await RestaurantFinder.get(`/${id}`)
    setSelectedRestaurant(response.data.data)
    }
    fetchData();
  },[])

console.log(selectedRestaurant)

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1 text-white">
            {selectedRestaurant.restaurants.restaurant_name}
          </h1>
          <div className="text-center">
            <Rating rating={selectedRestaurant.restaurants.average_rating}/>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default Restaurant;