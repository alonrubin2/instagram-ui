import './App.scss';
import Header from './Header/Header';
import Register from './Register/Register';
import Login from './Login/Login';
import PostCreate from './PostCreate/PostCreate';
import PostPage from './PostPage/PostPage';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
// import Cookies from 'js-cookie';
import {
  Switch,
  Route
} from 'react-router-dom';
import Feed from './Feed/Feed'
import { UserService } from './services/user.service';
import { UserContext } from './user-context';
import {MapContext} from './map-context';
import EditProfile from './EditProfile/EditProfile';
import Profile from './Profile/Profile';
import UserSearch from './UserSearch/UserSearch';




function App() {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [north, setNorth] = useState({});
  const [east, setEast] = useState({});



  useEffect(() => {
    async function getMe() {
      try {
        const user = await UserService.me();
        if (!user) {
          history.push('/login');
          return;
        }
        setUser(user);
      }
      catch (err) {
        console.log(err);
      }
    }
    getMe();
  }, [history]);

  function isLogged() {
    return Boolean(Object.keys(user).length);
  }





  return (
    <UserContext.Provider value={{ user: user, setUser }}>
      <div className="App">
        { isLogged() && <Header /> }
        <MapContext.Provider value={{ north: '', setNorth}, {east: '', setEast }}>

        <div className="container">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/search">
              <UserSearch />
            </Route>
            <Route path="/user/edit">
              <EditProfile />
            </Route>
            <Route path="/user/:username">
              <Profile />
            </Route>
            <Route path="/post/create">
              <PostCreate />
            </Route>
            <Route path="/post/:id">
              <PostPage />
            </Route>
            <Route path="/" exact>
              <Feed />
            </Route>
          </Switch>
        </div>
        </MapContext.Provider>

      </div>
    </UserContext.Provider>

  );
}

export default App;
