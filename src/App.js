import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import ShopOwnerLogin from './Pages/ShopOwnerLogin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShopOwnerRegisterPage from './Pages/ShopOwnerRegisterPage';
import ShopOwnerRegisterPage2 from './Pages/ShopOwnerRegisterPage2';
import ShopRegister3 from './components/Shop/ShopRegister3';
import PrivateRoute from './PrivateRoute';

import CartPage from './Pages/CartPage';
import Logout from './components/Logout/Logout';
import DashboardPage from './Pages/DashboardPage';
import OwnedProductsPage from './Pages/OwnedProductsPage';
import Account from './components/Account/Account';

const App = () => {
  let routes;
  if (
    window.location.pathname === '/dashboard' ||
    window.location.pathname === '/my-products'
  ) {
    routes = (
      <Router>
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
          <Route
            path="/dashboard"
            component={PrivateRoute(DashboardPage)}
            exact
          />
          <Route path={'/checkout'} component={CartPage} />
          <Route path="/log-out" component={Logout} exact />
          {/* <Route path="/my-products" component={OwnedProductsPage} exact /> */}
          <Route path="/account" component={Account} exact />
        </Switch>
      </Router>
    );
  } else
    routes = (
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
          <Route
            path="/dashboard"
            component={PrivateRoute(DashboardPage)}
            exact
          />
          <Route path={'/checkout'} component={CartPage} />
          <Route path="/log-out" component={Logout} exact />
          {/* <Route path="/my-products" component={OwnedProductsPage} exact /> */}
          <Route path="/account" component={Account} exact />
        </Switch>
      </Router>
    );
  return <div>{routes}</div>;
};

export default App;
