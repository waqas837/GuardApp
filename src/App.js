import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import EditProfile from "./AdminPanel/EditProfile";
import SearchUser from "./AdminPanel/SearchUser";
import UserList from "./AdminPanel/UserList";
import Posts from "./AdminPanel/Posts/Posts";
import Alerts from "./AdminPanel/Alerts";
import SearchIncidents from "./AdminPanel/SearchIncidents";
import Comments from "./AdminPanel/Comments";
import Notifications from "./AdminPanel/Notifications";
import Dashboard from "./AdminPanel/Dashboard";
import AdminLogin from "./AdminPanel/AdminLogin";
import UploadImagesAndVideos from "./AdminPanel/Posts/UploadImagesAndVideos";
import Error from "./Error";
import GoogleMapMarkersTest from "./GoogleMaps/GoogleMapMarkersTest";
import Home from "./Test/Home";
import Map from "./Test/Map";
import Paractice from "./Paractice";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/searchUser" component={SearchUser} />
          <Route exact path="/userList" component={UserList} />
          <Route exact path="/posts" component={Posts} />
          <Route
            exact
            path="/posts/addFiles/:id"
            component={UploadImagesAndVideos}
          />
          <Route exact path="/alerts" component={Alerts} />
          <Route exact path="/incidents" component={SearchIncidents} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/setting" component={EditProfile} />
          <Route exact path="/admin" component={AdminLogin} />
          {/* map test */}

          <Route exact path="/googlemap" component={Map} />
          {/* paracitcie */}
          <Route exact path="/p" component={Paractice} />
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
