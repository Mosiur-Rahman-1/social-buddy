import React from 'react';
import './App.css';
import Home from './componants/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './componants/NotFound/NotFound';
import PostDetails from './componants/PostDetails/PostDetails';


//Decalaring the main app componenet for the route
function App() {

return (
  //setup the router
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path = "/post/:postId">
          <PostDetails></PostDetails>
        </Route>
        <Route path = "*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
