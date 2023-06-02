import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ResAdd = () => {
    const [Res, setRes] = useState(
        {
            restaurant_name: "",
            cuisine_type: "",
            location: "",
            opening_hours: "",
            phone_number: "",
            email: "",
            sampleimage: ""
        }
    )

    const inputHandle = (event) => {
        setRes(
            {
                ...Res,
                [event.target.name]: event.target.value
            }
        )
    }

    const AddBtnClick = () => {
        console.log(Res)
        axios.post("http://localhost:4000/addRes", Res).then(
            (response) => {
                alert("Added A Restaurant")
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
                                Add A Restaurant
                            </h4>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Restaurant Name</label><input type="text" name="restaurant_name" value={Res.restaurant_name} onChange={inputHandle} placeholder='eg.ABC Restaurant, DEF Restaurant...' className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Cusine Type</label><input type="text" name="cuisine_type" value={Res.cuisine_type} onChange={inputHandle} placeholder='eg.French, Italian...' className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Location</label><input type="text" name="location" value={Res.location} onChange={inputHandle} className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Opening Hours</label><input type="text" name="opening_hours" value={Res.opening_hours} onChange={inputHandle} placeholder='eg.10:00 AM - 9:00 PM...' className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Phone Number</label><input type="text" name="phone_number" value={Res.phone_number} onChange={inputHandle} placeholder='+1...' className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Email</label><input type="email" name="email" value={Res.email} onChange={inputHandle} placeholder='eg.someone@example.com...' className="form-control" /></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"><label htmlFor="" className="form-label">Image URL</label><input type="text" name="sampleimage" value={Res.sampleimage} onChange={inputHandle} placeholder='eg.https://images.com...' className="form-control" /></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><button onClick={AddBtnClick} className="btn btn-primary">Add Restaurant</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResAdd