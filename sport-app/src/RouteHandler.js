import { Route, Switch } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import PlayerList from './components/PlayerList';
import PlayerById from './components/PlayerById';
import PlayerUpdate from './components/PlayerUpdate';
import PlayerDelete from './components/PlayerDelete';

function RouteHandler(){
    return(
        <>
        <div className="nav-links">
            <NavBar />
        </div>

        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/playerlist" exact component={PlayerList}></Route>
            <Route path="/playerlistbyid" exact component={PlayerById}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/registration" component={Registration}></Route>
            <Route path="/playerupdate/:id" component={PlayerUpdate}></Route>
            <Route path="/playerdelete" component={PlayerDelete}></Route>
        </Switch>
        </>
    )
}
export default RouteHandler;