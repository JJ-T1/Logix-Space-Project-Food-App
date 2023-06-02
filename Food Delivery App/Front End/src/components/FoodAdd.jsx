import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'


const FoodAdd = () => {
    const [Food, setFood] = useState(
        {
            restaurant_name: "",
            food_item_name: "",
            description: "",
            price: "",
            foodimage: ""
        }
    )

    const inputHandle = (event) => {
        setFood(
            {
                ...Food,
                [event.target.name]: event.target.value
            }
        )
    }

    const AddBtnClick = () => {
        console.log(Food)
        axios.post("http://localhost:4000/addFood", Food).then(
            (response) => {
                alert("Added A Food Item")
            }
        )
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h4 className="text-center">
                                Add A Food Item
                            </h4>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Restaurant Name</label><input type="text" name="restaurant_name" value={Food.restaurant_name} onChange={inputHandle} placeholder='eg.ABC Foodtaurant, DEF Foodtaurant...' className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Food Item Name</label><input type="text" name="food_item_name" value={Food.food_item_name} onChange={inputHandle} placeholder='eg.Japenese Ramen, Italian Cheesecake...' className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Description</label><input type="text" name="description" value={Food.description} onChange={inputHandle} className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Price (in $)</label><input type="text" name="price" value={Food.price} onChange={inputHandle} className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Image URL</label><input type="text" name="foodimage" value={Food.foodimage} onChange={inputHandle} placeholder='eg.https://images.com...' className="form-control" /></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><button onClick={AddBtnClick} className="btn btn-primary">Add Food Item</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodAdd