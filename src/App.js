import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import ShopPage from './components/Pages/Shop/Shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/Pages/Sign-in-and-sign-up/Sign-in-and-sign-up';
import './App.css';



function App() {
  return (
    <div>
    <Header />
      <Switch>        
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;