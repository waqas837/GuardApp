import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditProfile from "./AdminPanel/EditProfile";
import SearchUser from "./AdminPanel/SearchUser";
import UserList from "./AdminPanel/UserList";
import Posts from "./AdminPanel/Posts";
import Alerts from "./AdminPanel/Alerts";
import SearchIncidents from "./AdminPanel/SearchIncidents";
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <EditProfile />
        </Route>
        <Route exact path="/searchUser">
          <SearchUser/>
        </Route>
        <Route exact path="/userList">
          <UserList/>
        </Route>
        <Route exact path="/posts">
          <Posts/>
        </Route>
        <Route exact path="/alerts">
         <Alerts/>
        </Route>
        <Route exact path="/incidents">
         <SearchIncidents/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
