import React, { Component } from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/react-rating-app">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react-rating-app/customer">Customer</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react-rating-app/rental">Rental</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react-rating-app/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;