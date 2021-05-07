import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import ShopPage from './components/Pages/Shop/Shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/Pages/Sign-in-and-sign-up/Sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({ currentUser:user })
      console.log(this.state.currentUser)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
    <Header currentUser={ this.state.currentUser } />
      <Switch>        
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInAndSignUpPage} />
        <Route  exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}
  }
  

export default App;