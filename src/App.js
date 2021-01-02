import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ShopOwnerLogin from './Pages/ShopOwnerLogin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
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

export default App;
