import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./containers/Home/Home";
import Checkout from "./containers/Checkout/Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <Router>
              <Header/>
              <Switch>
                  <Route path={'/checkout'}>
                      <Checkout/>
                      <Footer/>
                  </Route>
                  <Route path={'/'} exact={true}>
                      <Home/>
                  </Route>

              </Switch>
      </Router>
  );

}

export default App;
