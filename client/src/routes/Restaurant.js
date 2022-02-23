import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestuarantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import Reviews from '../components/Reviews';

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
    <div>{selectedRestaurant && (
      <>
      <div className="mt-3">
        <Reviews/>
      </div>
      </>
    )}</div>
    </>
  )
}

export default Restaurant;