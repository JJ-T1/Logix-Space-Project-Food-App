// Navbar.js
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                    <Link class="nav-link active" aria-current="page" to="/" ><h4>Food Delivery App</h4></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/" >View Food Items</Link>
                            <Link class="nav-link active" aria-current="page" to="/fadd" >Add Food Items</Link> 
                            <Link class="nav-link active" aria-current="page" to="/fsearch" >Search for a Food Item</Link>    
                            <Link class="nav-link active" aria-current="page" to="/rview" >View Nearby Restaurants</Link>    
                            <Link class="nav-link active" aria-current="page" to="/rsearch" >Search for Nearby Restaurant</Link>    
                            <Link class="nav-link active" aria-current="page" to="/radd" >Add A Restaurant</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
      )
}

export default Navbar
