import React, { useContext, useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestuarantsContext';

const Add = () => {
    
    const { addRestaurants } = useContext(RestaurantsContext)

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");
const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await RestaurantFinder.post("/", {
        restaurant_name: name,
        location: location,
        price_range: priceRange
    })
    addRestaurants(response.data.data.restaurant)
    setName("");
    setLocation("");
    setPriceRange("")
}
  return (
    <div className="mb-4">
         <form action="">
             <div className="row">
                 <div className="col">
                     <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Name"/>
                 </div>
                 <div className="col">
                     <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="form-control" placeholder="Location"/>
                 </div>
                 <div className="col">
                     <select className="custom-select w-100 p-2" value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                         <option disabled>Price Range</option>
                         <option value="1">$</option>
                         <option value="2">$$</option>
                         <option value="3">$$$</option>
                         <option value="4">$$$$</option>
                         <option value="5">$$$$$</option>
                     </select>
                 </div>
                 <button type="submit" onClick={handleSubmit} className="btn btn-warning text-white col">Add</button>
             </div>
         </form>
    </div>
  )
}

export default Add