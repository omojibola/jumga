import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ShopOwnerLogin from './Pages/ShopOwnerLogin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./containers/Home/Home";
import Checkout from "./containers/Checkout/Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
<<<<<<< HEAD
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
=======
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/shop-login" component={ShopOwnerLogin} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
>>>>>>> fbc7b38f9cbb1c499171c4d44391258727da52f1

export default App;
