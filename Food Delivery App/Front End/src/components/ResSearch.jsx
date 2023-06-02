import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const ResSearch = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useState({
    restaurant_name: '',
    cuisine_type: '',
    location: ''
  });

  const inputHandle = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value
    });
  };

  const searchRestaurants = () => {
    axios
      .post('http://localhost:4000/searchRes', searchParams)
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch((error) => {
        console.error('Error occurred while searching for Restaurants:', error);
      });
  };

  useEffect(() => {
    searchRestaurants();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row g-3">
          <div className="col-12 text-center">
            <h4>Search Restaurants</h4>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <label htmlFor="restaurant_name" className="form-label">
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurant_name"
              name="restaurant_name"
              value={searchParams.restaurant_name}
              onChange={inputHandle}
              className="form-control"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <label htmlFor="cuisine_type" className="form-label">
              Cuisine Type
            </label>
            <input
              type="text"
              id="cuisine_type"
              name="cuisine_type"
              value={searchParams.cuisine_type}
              onChange={inputHandle}
              className="form-control"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={searchParams.location}
              onChange={inputHandle}
              className="form-control"
            />
          </div>
          <div className="col-12 text-center">
            <button onClick={searchRestaurants} className="btn btn-primary">
              Search Restaurants
            </button>
            <p></p>
            <p><h5>The Available Restaurants</h5></p>
          </div>
        </div>
        <div className="row g-3">
          {searchResult.map((restaurant, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100">
                <img src={restaurant.sampleimage} className="card-img-top" alt="Restaurant" />
                <div className="card-body">
                  <h5 className="card-title">{restaurant.restaurant_name}</h5>
                  <p className="card-text"><p class="fst-italic">Cuisine Type: {restaurant.cuisine_type}</p></p>
                  <p className="card-text"><p class="fw-bold">Open From: {restaurant.opening_hours}</p></p>
                  <p className="card-text">Phone Number: {restaurant.phone_number}</p>
                  <p className="card-text">Email: {restaurant.email}</p>
                  <p class="card-text"><small class="text-body-secondary">@ {restaurant.location} </small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResSearch;
