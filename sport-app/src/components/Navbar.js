import React from "react";
import { NavLink } from "react-router-dom";
import LoginContext from "../Context/LoginContext";

function NavBar() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-orange bg-orange fixed-top shadow-lg">
                <div class="container">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li><NavLink className="nav-link" exact to='/' activeClassName="text-white">Home</NavLink></li>
                            {/* <li><NavLink className="nav-link" exact to='/playerlist' activeClassName="text-white">Player List</NavLink></li>
                            <li><NavLink className="nav-link" exact to='/playerlistbyid' activeClassName="text-white">Search</NavLink></li> */}
                        </ul>

                        <div class="text-end">
                            <ul className="nav">
                                {/* <li><button className="btn btn-outline-success me-2" activeClassName="btn btn-success" onClick={callLogin}>Login</button></li>
                                <li><button className="btn btn-outline-success" activeClassName="btn btn-success" onClick={callRegister}>Registration</button></li> */}
                                {/* <li className="me-3">Welcome {ctx}</li> */}
                                <li><NavLink className="btn btn-outline-light me-3 hvr-float-shadow" exact to='/login' activeClassName="btn btn-light text-dark">LogIn</NavLink></li>
                                <li><NavLink className="btn btn-outline-light me-3 hvr-float-shadow" exact to='/registration' activeClassName="btn btn-light text-dark">SignUp</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;