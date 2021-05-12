import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './components/Pages/HomePage/HomePage';
import ShopPage from './components/Pages/Shop/Shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/Pages/Sign-in-and-sign-up/Sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import  CheckoutPage  from './components/Pages/checkout/checkout';
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
    const { setCurrentUser }= this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);        
     });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
    <Header />
      <Switch>
        <Route  exact path='/checkout' component={CheckoutPage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInAndSignUpPage} />
        <Route  exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}
}

  const mapState = createStructuredSelector({
    currentUser :selectCurrentUser
  });
  
const mapDispatch= dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});
export default connect(mapState, mapDispatch)(App);