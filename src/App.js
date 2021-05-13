import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//contexts
import MovieContextProvider from './contexts/MovieContext';
import AuthContextProvider from './contexts/AuthContext';
import ModalContextProvider from './contexts/ModalContext';
// pages
import MovieDetails from './pages/MovieDetails';
import BrowseMovies from './pages/BrowseMovies';
import Home from './pages/Home';
import Login from './pages/Login';
import Modal from './components/Modal';
import Signup from './pages/Signup';
// privatePages
import Dashboard from './privatePages/Dashboard';
import PrivateRoute from './privatePages/PrivateRoute';
import Header from './components/layout/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <MovieContextProvider>
            <ModalContextProvider>
              <Modal />
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />

                <Route path='/search' component={BrowseMovies} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route path='/:post_id' component={MovieDetails} />

              </Switch>
            </ModalContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </div >
    </Router>
  );
}

export default App;
