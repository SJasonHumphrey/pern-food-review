import React, { useContext, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestuarantsContext';

const List = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)
    useEffect(() =>{
        async function fetchData () {
          const response = await RestaurantFinder.get("/")
          setRestaurants(response.data.data.restaurants)
        }
        fetchData();
    },[]);

  return (
    <div className="list-group m-4">
        <table className="table table-hover">
            <thead>
                <tr className="bg-primary text-white">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody className="table-dark">
                {restaurants && restaurants.map((restaurant) => {
                    return (
                      <tr key={restaurant.id}>
                       <td>{restaurant.restaurant_name}</td>
                       <td>{restaurant.location}</td>
                       <td>{"$".repeat(restaurant.price_range)}</td>
                       <td>Reviews</td>
                       <td>
                           <button className="btn btn-warning">Update</button>
                       </td>
                       <td>
                           <button className="btn btn-danger">Update</button>
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