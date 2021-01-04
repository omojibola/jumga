import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingPage from './Pages/LandingPage';
import ShopOwnerLogin from './Pages/ShopOwnerLogin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShopOwnerRegisterPage from './Pages/ShopOwnerRegisterPage';
import ShopOwnerRegisterPage2 from './Pages/ShopOwnerRegisterPage2';
import ShopRegister3 from './components/Shop/ShopRegister3';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import * as actions from './store/actions/authActions';
import CartPage from './Pages/CartPage';
import Logout from './components/Logout/Logout';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/shop-login" component={ShopOwnerLogin} exact />
          <Route
            path="/shop-register"
            component={ShopOwnerRegisterPage}
            exact
          />
          <Route
            path="/shop-register/step2"
            component={ShopOwnerRegisterPage2}
            exact
          />
          <Route path="/shop-register/step3" component={ShopRegister3} exact />
          <Route path="/dashboard" component={PrivateRoute(Dashboard)} exact />
          <Route path={'/checkout'} component={CartPage} />
          <Route path="/log-out" component={Logout} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

const mapDispatchToProps = {
  verifyAuth: actions.VerifyAuth,
};

export default connect(null, mapDispatchToProps)(App);
