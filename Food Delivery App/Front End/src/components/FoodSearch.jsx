import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const FoodSearch = () => {
  const [fsearchResult, setfSearchResult] = useState([]);
  const [fsearchParams, setfSearchParams] = useState({
    food_item_name: '',
    minPrice: '',
    maxPrice: ''
  });

  const inputHandle = (event) => {
    setfSearchParams({
      ...fsearchParams,
      [event.target.name]: event.target.value
    });
  };

  const searchFood = () => {
    axios
      .post('http://localhost:4000/searchFood', fsearchParams)
      .then((response) => {
        setfSearchResult(response.data);
      })
      .catch((error) => {
        console.error('Error occurred while searching for Food Items:', error);
      });
  };

  useEffect(() => {
    searchFood();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row g-3">
          <div className="col-12 text-center">
            <h4>Search For Food Items</h4>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <label htmlFor="food_item_name" className="form-label">
              Food Item Name
            </label>
            <input
              type="text"
              id="food_item_name"
              name="food_item_name"
              value={fsearchParams.food_item_name}
              onChange={inputHandle}
              className="form-control"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <label htmlFor="minPrice" className="form-label">
              Minimum Price (in $)
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={fsearchParams.minPrice}
              onChange={inputHandle}
              className="form-control"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <label htmlFor="maxPrice" className="form-label">
              Maximum Price (in $)
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={fsearchParams.maxPrice}
              onChange={inputHandle}
              className="form-control"
            />
          </div>
          <div className="col-12 text-center">
            <button onClick={searchFood} className="btn btn-primary">
              Search
            </button>
            <p></p>
            <p>
              <h5>The Available Food Items</h5>
            </p>
          </div>
        </div>
        <div className="row g-3">
          {fsearchResult.map((food, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100">
                <img src={food.foodimage} className="card-img-top" alt="food" />
                <div className="card-body">
                  <h5 className="card-title">{food.food_item_name}</h5>
                  <p className="card-text">
                    <p className="fst-italic">{food.description}</p>
                  </p>
                  <p className="card-text">
                    <p className="fw-bold">${food.price}</p>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">From {food.restaurant_name}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodSearch;
