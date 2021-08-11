import { useLocation, useParams } from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import Home from "./Home";
import UserNav from "./UserNav";

const LoginProvider = (props) => {
    const params = useParams();
    console.log(params);

    const loc = useLocation();
    console.log(loc.state);
    const user = loc.state;

    return (
        <LoginContext.Provider value={user}>
            <UserNav />
            <Home />
        </LoginContext.Provider>
    )
}
export default LoginProvider; 