import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestuarantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import Rating from '../components/Rating';

const Restaurant = () => {
  const {id} = useParams();

  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() =>{
    const fetchData = async () => {
    const response = await RestaurantFinder.get(`/${id}`)
    setSelectedRestaurant(response.data.data.restaurants)
    }
    fetchData();
  })

  return (
    <>
    <h1 className="text-white text-center">{selectedRestaurant && selectedRestaurant.restaurant_name}</h1>
    <div>{<Rating rating={3}/>}</div>
    </>
  )
}

export default Restaurant;