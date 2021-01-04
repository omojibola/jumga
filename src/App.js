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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
