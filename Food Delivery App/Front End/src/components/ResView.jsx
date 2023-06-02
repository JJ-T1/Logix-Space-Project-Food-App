import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'


const ResView = () => {
    const [ResList, setResList] = useState([])

    React.useEffect(() => { fetchData() }, [])

    const fetchData = () => {
        axios.post("http://localhost:4000/viewRes").then(
            (response) => {
                setResList(response.data)
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
                                List of Available Restaurants
                            </h4>
                            {ResList.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 d-flex align-items-stretch">
                                        <div class="card h-100">
                                            <img src={value.sampleimage} class="card-img-top" alt="..." />  
                                            <div class="card-body">
                                                <h5 class="card-title">{value.restaurant_name}</h5>
                                                <p class="card-text"><p class="fst-italic">Cuisine Type: {value.cuisine_type}</p></p>
                                                <p class="card-text"><p class="fw-bold">Open From: {value.opening_hours}</p></p>
                                                <a href="#" class="btn btn-primary">See More</a>
                                                <p></p>
                                                <p class="card-text"><small class="text-body-secondary">Located @ {value.location} </small></p>
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

export default ResView