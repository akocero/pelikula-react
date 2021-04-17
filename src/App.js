import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//contexts
import MovieContextProvider from './context/MovieContext';
import AuthContextProvider from './context/AuthContext';
// pages
import MovieDetails from './components/pages/MovieDetails';
import BrowseMovies from './components/pages/BrowseMovies';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
// privatePages
import Dashboard from './components/privatePages/Dashboard';
import PrivateRoute from './components/privatePages/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <MovieContextProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/search' component={BrowseMovies} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path='/:post_id' component={MovieDetails} />

            </Switch>

          </MovieContextProvider>
        </AuthContextProvider>
      </div >
    </Router>
  );
}

export default App;
