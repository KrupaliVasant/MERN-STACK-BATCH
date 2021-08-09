import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import PlayerList from './PlayerList';
import '../components/custom.css'
import { NavLink } from 'react-router-dom';

function Login() {

    // let loginName = "Krupali";

    return (
        <>
            <div className="container mt-contain">
                <div className="form-center">
                    <div className="p-4 px-5 bg-green text-dark border-radius shadow-lg">
                        <h3 className="text-center text-color mb-5">Login</h3>
                        <form>
                            <div className="input-group mb-3">
                                <label htmlFro="email" className="input-group-text">Email address:</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="input-group mb-4">
                                <label htmlFro="password" className="input-group-text">Password:</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="d-grid gap-2 text-center mb-5">
                                <button type="submit" className="btn btn-success">Login</button>
                            </div>
                            <div className="text-center mb-3">
                                <span className="text-white me-3">Not a membar?</span>
                                <NavLink to="/registration" exact className="text-color text-decoration-none" activeClassName="text-success">SignUp now</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <PlayerList username={loginName}/> */}
        </>
    )
}
export default Login;