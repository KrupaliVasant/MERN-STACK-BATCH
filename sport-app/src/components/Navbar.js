import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <NavLink to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        {/* <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
                    </NavLink>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink className="nav-link" to='/'>Home</NavLink></li>
                        <li><NavLink className="nav-link" to='/playerlist'>Player List</NavLink></li>
                    </ul>

                    <div class="col-md-3 text-end">
                        <ul className="nav">
                            <li><NavLink className="btn btn-outline-primary me-2" to='/login'>Login</NavLink></li>
                            <li><NavLink className="btn btn-primary" to='/registration'>Registration</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavBar;