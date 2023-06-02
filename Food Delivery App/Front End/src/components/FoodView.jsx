import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const FoodView = () => {
    const [FoodList, setFoodList] = useState([])

    React.useEffect(() => { fetchData() }, [])

    const fetchData = () => {
        axios.post("http://localhost:4000/viewFood").then(
            (response) => {
                setFoodList(response.data)
            }
        )
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h4 className="text-center">
                                List of Available Food Items
                            </h4>
                            {FoodList.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 d-flex align-items-stretch">
                                        <div class="card h-100">
                                            <img src={value.foodimage} class="card-img-top" alt="..." />  
                                            <div class="card-body">
                                                <h5 class="card-title">{value.food_item_name}</h5>
                                                <p class="card-text"><p class="fst-italic">{value.description}</p></p>
                                                <p class="card-text"><p class="fw-bold">Price : $ {value.price}</p></p>
                                                <a href="#" class="btn btn-primary">Add to Cart</a>
                                                <p></p>
                                                <p class="card-text"><small class="text-body-secondary">From {value.restaurant_name} </small></p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodView