import React, { useContext, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestuarantsContext';
import { useNavigate } from "react-router-dom";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";
import Rating from './Rating';


const List = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)
  let navigate = useNavigate();
    useEffect(() =>{
        async function fetchData () {
          const response = await RestaurantFinder.get("/")
          setRestaurants(response.data.data.restaurants)
        }
        fetchData();
    },[]);

    const handleDelete = async (e,id) => {
      e.stopPropagation();
      await RestaurantFinder.delete(`/${id}`);
    setRestaurants(restaurants.filter(restaurant => {
      return restaurant.id !== id
    }))
    }

    const handleUpdate = async (e, id) => {
      e.stopPropagation();
       await navigate(`/restaurants/${id}/update`)
    }

    const handleRestaurantSelect = async (id) => {
      await navigate(`/restaurants/${id}`)
    }

    const renderRating = (restaurant) => {
      if (!restaurant.count) {
        return <span className="text-danger">0 reviews</span>;
      }
      return (
        <>
        <div className="d-flex">
          <Rating rating={restaurant.average_rating} />
          <span className="text-danger">({restaurant.count})</span>
          </div>
        </>
      );
    };
  

  return (
    <div className="list-group m-4">
        <table className="table table-hover">
            <thead>
                <tr className="bg-warning text-white">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody className="table-light">
                {restaurants && restaurants.map((restaurant) => {
                    return (
                      <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                       <td>{restaurant.restaurant_name}</td>
                       <td>{restaurant.location}</td>
                       <td>{"$".repeat(restaurant.price_range)}</td>
                       <td>{renderRating(restaurant)}</td>
                       <td>
                           <BsPencilSquare onClick={(e) => handleUpdate(e,restaurant.id)} className="text-success"/>
                       </td>
                       <td>
                           <BsTrashFill onClick={(e) => handleDelete(e,restaurant.id)} className="text-danger"/>
                       </td>
                      </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
  )
}

export default List