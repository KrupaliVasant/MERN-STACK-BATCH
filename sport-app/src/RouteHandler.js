import { Route, Switch } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import PlayerList from './components/PlayerList';

function RouteHandler(){
    return(
        <>
        <div className="nav-links">
            <NavBar />
        </div>

        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/playerlist" exact component={PlayerList}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/registration" component={Registration}></Route>
        </Switch>
        </>
    )
}
export default RouteHandler;